"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { type ReactNode, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function PortfolioMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    const mediaQuery = gsap.matchMedia();

    const context = gsap.context(() => {
      mediaQuery.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".motion-reveal", { clearProps: "all" });
        gsap.set(".paper-matte", { clipPath: "inset(0 0 100% 0)" });
      });

      mediaQuery.add("(prefers-reduced-motion: no-preference)", () => {
        const lenis = new Lenis({ duration: 1.1, smoothWheel: true, syncTouch: false });
        let rafId = 0;
        lenis.on("scroll", ScrollTrigger.update);
        const raf = (time: number) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        gsap.utils.toArray<HTMLElement>(".motion-reveal").forEach((element) => {
          gsap.from(element, {
            opacity: 0,
            y: 24,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>(".paper-reveal").forEach((element) => {
          const matte = element.querySelector<HTMLElement>(".paper-matte");
          if (!matte) return;
          gsap.set(matte, { clipPath: "inset(0 0 0 0)" });
          gsap.to(matte, {
            clipPath: "inset(0 0 100% 0)",
            duration: 0.85,
            ease: "power2.inOut",
            scrollTrigger: { trigger: element, start: "top 86%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>(".artwork-drift").forEach((element) => {
          gsap.fromTo(element, { y: 12 }, {
            y: 0,
            ease: "none",
            scrollTrigger: { trigger: element, start: "top 84%", end: "bottom 20%", scrub: 1 },
          });
        });

        gsap.utils.toArray<HTMLElement>(".surface-focus").forEach((element) => {
          const image = element.querySelector<HTMLElement>("img");
          const zoom = Number(element.dataset.focusZoom) || 1;
          if (!image || zoom <= 1) return;
          gsap.fromTo(image, { scale: zoom * 1.04 }, {
            scale: zoom,
            ease: "none",
            scrollTrigger: { trigger: element, start: "top 88%", end: "bottom 30%", scrub: 1 },
          });
        });

        return () => {
          lenis.destroy();
          cancelAnimationFrame(rafId);
        };
      });

      mediaQuery.add("(min-width: 901px) and (prefers-reduced-motion: no-preference)", () => {
        const practice = root.current?.querySelector<HTMLElement>(".practice-section");
        const practiceCopy = root.current?.querySelector<HTMLElement>(".practice-copy");
        if (!practice || !practiceCopy) return;

        ScrollTrigger.create({
          trigger: practice,
          start: "top top+=24",
          end: "bottom bottom-=24",
          pin: practiceCopy,
          pinSpacing: false,
        });
      });
    }, root);

    return () => {
      mediaQuery.revert();
      context.revert();
    };
  }, { scope: root, dependencies: [pathname], revertOnUpdate: true });

  return <div ref={root}>{children}</div>;
}
