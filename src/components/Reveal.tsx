"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    // Reset state on route change so previously-revealed nodes (now unmounted) are forgotten,
    // and freshly mounted nodes get observed.
    const setup = () => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.in)");
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
      );
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("in");
        } else {
          io.observe(el);
        }
      });
      return io;
    };
    // RAF lets new pages render their reveal nodes before we query.
    const raf = requestAnimationFrame(() => {
      const io = setup();
      (window as any).__io = io;
    });
    return () => {
      cancelAnimationFrame(raf);
      (window as any).__io?.disconnect();
    };
  }, [pathname]);
  return null;
}
