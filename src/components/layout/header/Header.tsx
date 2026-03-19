import { useGSAP } from "@gsap/react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { useRef } from "react";

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
  const container = useRef(null);

  /** Slide left to right the navbar. */
  /** @TODO CROP THE POPCORN FROM THE SVG LOGO SO WE CAN ANIMATE THEM WITH GSAP ONHOVER */
  useGSAP(
    () => {
      gsap.from(container.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
    },
    { scope: container }
  );

  return (
    <header
      ref={container}
      className="fixed top-5 left-1/2 z-50 flex h-40 w-screen -translate-x-1/2 items-center px-16"
    >
      <div className="container mx-auto flex w-full items-center justify-between px-4">
        {/* Left: Logo */}
        <div className="flex w-44 items-center">
          <Link to="/" className="h-32 w-32">
            <img src={logo} alt="Logo" className="h-full w-full object-contain" />
          </Link>
        </div>

        {/* Center Nav */}
        <div className="flex flex-1 justify-center">
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
    </header>
  );
}
