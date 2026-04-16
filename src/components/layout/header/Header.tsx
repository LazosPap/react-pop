import { useGSAP } from "@gsap/react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { MenuIcon } from "lucide-react";
import { useRef } from "react";

import { LogoText } from "@/assets/svg";
import { PopcornAnimation } from "@/components/layout/header/PopcornAnimation";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { animateSvg } from "@/lib/gsap";

/**
 * Header component to display a fixed top navbar.
 *
 * @param logo - Accepts a string so you can place the logo image.
 * @param navLinks - navLinks accepts an array so you can map the links.
 * @param activeMenu - activeMenu(optional) we pass a string of the route name we want.
 * @param popcorn - Popcorn images(optional) to animate the array of the popcorn for logo.
 * @returns - The rendered header component.
 */

export interface HeaderProps {
  logo: string;
  navLinks: string[];
  activeMenu?: string;
  popcorn?: string[];
}

export function Header({ logo, navLinks, activeMenu }: HeaderProps) {
  const container = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });

    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
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

    /** Animate header entrance */
    gsap.from(container.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    tl.current.to(
      "#top-line",
      {
        // Top line rotate and move down
        rotate: 45,
        y: 5.5,
        duration: 1,
        ease: "expo.out"
      },
      0
    ); // Starts immediately after click

    tl.current.to(
      "#bottom-line",
      {
        // Bottom line rotate and move up
        rotate: -45,
        y: -5.5,
        duration: 1,
        ease: "expo.out" // Fast start, very smooth end
      },
      "<"
    ); // Starts immediately with previous animation

    /** Call the animateSvg function to draw the svg letters of the logo */
    if (svgRef.current) {
      animateSvg(svgRef.current);
    }
  }, []);

  return (
    <header
      className="fixed left-1/2 z-50 flex h-40 w-screen -translate-x-1/2 items-center md:px-16"
    >
      {/* Desktop */}
      <div className="container mx-auto flex w-full items-center justify-between px-4">
        <div className="flex items-center gap-2 md:gap-4">
          {/* Popcorn animation component */}
          <PopcornAnimation />

          <Link to="/" className="flex items-center">
            <div className="w-30 sm:w-32 md:w-40 lg:w-52">
              <LogoText ref={svgRef} className="h-auto w-full" />
            </div>
          </Link>
        </div>

        {/* Center Nav */}
        <div ref={container} className="hidden flex-1 justify-center md:flex">
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

      {/* Hamburger Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex flex-col gap-1 md:hidden">
            <div
              className="bg-accent flex h-12 w-12 cursor-pointer flex-col items-center
                justify-center gap-[0.4rem] rounded-full md:h-20 md:w-20"
            >
              <MenuIcon className="h-8 w-8" />
            </div>
          </div>
        </SheetTrigger>
        <SheetContent className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle>
              <img src={logo} className="h-24 w-24 dark:invert" alt="asd" />
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>

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
