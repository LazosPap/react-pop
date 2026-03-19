import { useGSAP } from "@gsap/react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

import { Logo } from "@/assets/svg";
import { Button } from "@/components/ui/button";

export function NotFound() {
  const textContainer = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const split = SplitText.create(".text", { type: "chars" });
    const el = document.querySelector(".counter");
    const obj = { val: 0 };

    gsap.to(obj, {
      val: 404,
      ease: "none",
      onUpdate: () => {
        if (el) {
          el.textContent = Math.round(obj.val).toLocaleString();
        }
      }
    });

    gsap.from(split.chars, {
      y: (i) => Math.sin(i * 0.8) * 60,
      scale: (i) => 0.5 + Math.abs(Math.sin(i * 0.8)) * 0.5,
      opacity: 0,
      stagger: 0.03,
      duration: 0.8,
      ease: "elastic.out(1, 0.6)"
    });

    gsap.from(imageRef.current, {
      y: -30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  });

  return (
    <main className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <img ref={imageRef} src={Logo} className="h-52 w-52 object-contain" />
        <div className="text">
          <h1 className="counter text-9xl font-extrabold text-black">404</h1>
          <h1 ref={textContainer} className="text-6xl font-semibold text-black">
            Not Found
          </h1>
        </div>
        <Button className="h-full w-full text-3xl font-semibold" asChild>
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </main>
  );
}
