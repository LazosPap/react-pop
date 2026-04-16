import { useGSAP } from "@gsap/react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap/all";
import { useRef } from "react";

import { LogoBucket } from "@/assets/svg";
import { POPCORN, POPCORN_SIZES } from "@/constants";

export function PopcornAnimation() {
  /** Init the refs for the GSAP animation. */
  const bucketRef = useRef<HTMLImageElement | null>(null);
  const popcornRefs = useRef<HTMLDivElement[]>([]);

  /** All the popcorn options so we can loop it. */
  const layout = POPCORN;

  useGSAP(() => {
    const shakeBucket = () => {
      /** Safe guard. */
      if (!bucketRef.current) return;

      const strength = gsap.utils.random(0.8, 1.4);

      gsap.fromTo(
        bucketRef.current,
        /** From options. */
        { x: 0, y: 0, rotation: 0, transformOrigin: "50% 80%" },
        /** To options. */
        {
          keyframes: [
            { x: -3 * strength, rotation: -2 * strength, duration: 0.05 },
            { x: 3 * strength, rotation: 2 * strength, duration: 0.05 },
            { x: -2 * strength, rotation: -1.2 * strength, duration: 0.04 },
            { x: 2 * strength, rotation: 1.2 * strength, duration: 0.04 },
            { x: -1 * strength, rotation: -0.6 * strength, duration: 0.03 },
            { x: 1 * strength, rotation: 0.6 * strength, duration: 0.03 },
            { x: 0, rotation: 0, duration: 0.04 }
          ],
          ease: "power2.out"
        }
      );
    };

    layout.items.map((item, index) => {
      const el = popcornRefs.current[index];

      /** Safe guard. */
      if (!el) return;
      const key = item.id;

      gsap.set(el, {
        width: POPCORN_SIZES[key],
        height: POPCORN_SIZES[key],
        x: gsap.utils.random(-16, 16),
        y: gsap.utils.random(-28, -20),
        z: 0,
        scale: 0.4,
        rotation: gsap.utils.random(-20, 20),
        transformOrigin: "center center"
      });

      gsap
        .timeline({ delay: Math.random() * 0.4 })
        .to(el, {
          scaleX: 1.3,
          scaleY: 0.7,
          duration: 0.08,
          filter: "blur(2px)",
          backgroundColor: "transparent",
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut"
        })

        .call(shakeBucket)

        .to(el, {
          x: item.x,
          y: item.y,
          scale: 1,
          rotation: gsap.utils.random(-60, 60),
          duration: item.duration,
          ease: "back.out(2)",
          filter: "blur(0px)"
        })
        .to(el, {
          duration: 0.25,
          ease: "bounce.out"
        })
        .to(el, {
          duration: 0.15
        });
    });
  }, []);

  return (
    <Link to="/" className="relative h-24 w-24 sm:h-32 sm:w-32 md:h-32 md:w-32">
      <img ref={bucketRef} src={LogoBucket} alt="Logo" className="h-full w-full object-contain" />
      {/* Popcorn */}
      {POPCORN.items.map((item, index) => (
        <div
          key={item.id}
          ref={(el) => {
            if (el) popcornRefs.current[index] = el;
          }}
          className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2"
        >
          <img src={item.src} className="h-full w-full" />
        </div>
      ))}
    </Link>
  );
}
