import { useGSAP } from "@gsap/react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { Menu } from "lucide-react";
import { useRef } from "react";

import { LogoText } from "@/assets/svg";
import { animateSvg } from "@/lib/gsap";

/**
 * Header component to display a fixed top navbar.
 *
 * @param logo - Accepts a string so you can place the logo image.
 * @param navLinks - navLinks accepts an array so you can map the links.
 * @param activeMenu - activeMenu(optional) we pass a string of the route name we want.
 * @returns - The rendered header component.
 */

export interface HeaderProps {
  logo: string;
  navLinks: string[];
  activeMenu?: string;
}

export function Header({ logo, navLinks, activeMenu }: HeaderProps) {
  const container = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "header",
        /** When the bottom of the navbar reaches the top of the viewport then start the animation. */
        start: "bottom top",
        scrub: true
      }
    });
    /** Blur the background for the whole navbar we have. */
    navTween.fromTo(
      "header",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "rgba(248, 249, 250, 0.6)",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut"
      }
    );
    // Animate header entrance
    gsap.from(container.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    /** Call the animateSvg function to draw the svg letters of the logo */
    if (svgRef.current) {
      animateSvg(svgRef.current);
    }
  }, []);

  return (
    <header
      ref={container}
      className="fixed left-1/2 z-50 flex h-40 w-screen -translate-x-1/2 items-center md:px-16"
    >
      {/* Desktop */}
      <div className="container mx-auto flex w-full items-center justify-between px-4">
        {/* LEFT: Logo + LogoText */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/" className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32">
            <img src={logo} alt="Logo" className="h-full w-full object-contain" />
          </Link>

          <Link to="/" className="flex items-center">
            <div className="w-30 sm:w-32 md:w-40 lg:w-52">
              <LogoText ref={svgRef} className="h-auto w-full" />
            </div>
          </Link>
        </div>

        {/* Center Nav */}
        <div className="hidden flex-1 justify-center md:flex">
          <nav className="text-md flex gap-2 font-medium">
            {navLinks.map((item, index) => (
              <Link
                className={`group relative rounded-md px-4 py-2 transition-all duration-300 ease-out
                ${item === activeMenu ? "bg-muted text-primary" : ""} `}
                to={item === "Home" ? "/" : item.toLowerCase()}
                key={index}
              >
                {item}
                <span
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-black
                    transition-transform duration-300 group-hover:scale-x-100"
                ></span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex flex-col gap-1 md:hidden">
        <Menu className="h-8 w-8" />
      </div>

      {/* Mobile Menu */}
      <div className="overflow-hidden bg-white/90 backdrop-blur-md md:hidden" style={{ height: 0 }}>
        <nav className="flex flex-col items-center gap-4 py-6">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item === "Home" ? "/" : item.toLowerCase()}
              className={`text-lg font-medium ${item === activeMenu ? "text-primary" : ""}`}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
