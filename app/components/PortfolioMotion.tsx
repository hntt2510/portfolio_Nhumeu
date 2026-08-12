"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { type ReactNode, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function PortfolioMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis: Lenis | undefined;
    let rafId = 0;

    if (!reducedMotion) {
      lenis = new Lenis({ duration: 1.1, smoothWheel: true, syncTouch: false });
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    const context = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(".motion-reveal", { clearProps: "all" });
        return;
      }

      gsap.utils.toArray<HTMLElement>(".motion-reveal").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 24,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".artwork-drift").forEach((element) => {
        gsap.fromTo(element, { scale: 0.985, opacity: 0.72 }, {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: { trigger: element, start: "top 84%", end: "bottom 20%", scrub: 1 },
        });
      });

      const practice = root.current?.querySelector<HTMLElement>(".practice-section");
      const practiceCopy = root.current?.querySelector<HTMLElement>(".practice-copy");
      if (practice && practiceCopy && window.matchMedia("(min-width: 901px)").matches) {
        ScrollTrigger.create({
          trigger: practice,
          start: "top top+=24",
          end: "bottom bottom-=24",
          pin: practiceCopy,
          pinSpacing: false,
        });
      }
    }, root);

    return () => {
      context.revert();
      lenis?.destroy();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, { scope: root });

  return <div ref={root}>{children}</div>;
}
