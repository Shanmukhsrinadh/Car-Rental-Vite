import { ReactNode, useEffect } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    let currentY = window.scrollY;
    let targetY = window.scrollY;
    let animationFrame = 0;
    let isAnimating = false;

    const clamp = (value: number) => {
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      return Math.max(0, Math.min(value, maxScroll));
    };

    const animate = () => {
      const distance = targetY - currentY;
      currentY += distance * 0.22;
      if (Math.abs(distance) < 0.5) {
        currentY = targetY;
        window.scrollTo(0, currentY);
        isAnimating = false;
        animationFrame = 0;
        return;
      }
      window.scrollTo(0, currentY);
      animationFrame = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (!isAnimating) {
        isAnimating = true;
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey) return;
      const target = event.target as HTMLElement | null;
      const scrollableParent = target?.closest("[data-native-scroll], textarea, select, iframe");
      if (scrollableParent) return;
      event.preventDefault();
      const normalizedDelta = event.deltaMode === 1 ? event.deltaY * 40 : event.deltaY;
      const direction = Math.sign(normalizedDelta);
      const magnitude = Math.min(Math.abs(normalizedDelta), 180);
      const scrollStep = magnitude < 40 ? normalizedDelta * 2.6 : direction * Math.max(magnitude, 96);
      targetY = clamp(targetY + scrollStep);
      startAnimation();
    };

    const syncScrollPosition = () => {
      if (!isAnimating) {
        currentY = window.scrollY;
        targetY = window.scrollY;
      }
    };

    const handleAnchorClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href^='#']");
      const hash = link?.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.querySelector(hash);
      if (!target) return;
      event.preventDefault();
      const targetTop = target.getBoundingClientRect().top + window.scrollY - 80;
      targetY = clamp(targetTop);
      startAnimation();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", syncScrollPosition, { passive: true });
    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", syncScrollPosition);
      document.removeEventListener("click", handleAnchorClick);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <>{children}</>;
}
