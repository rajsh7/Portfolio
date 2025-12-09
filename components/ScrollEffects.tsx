"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollEffects() {
  useEffect(() => {
    // Fade + slide up elements
    gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });

    // Parallax for hero background (if you add .parallax-bg)
    gsap.utils.toArray<HTMLElement>(".parallax-bg").forEach((el) => {
      gsap.to(el, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
