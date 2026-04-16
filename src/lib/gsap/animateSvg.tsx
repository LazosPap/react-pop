import gsap from "gsap";

/**
 * @param svgElement - Put the svg element as prop.
 * @returns - Render the animation of the SVG.
 */

/** Animate SVG's while using the path from it. */
export function animateSvg(svgElement: SVGSVGElement) {
  if (!svgElement) return;

  /** Grab all the paths of the svg so we can use the drawSvgPlugin from Gsap. */
  const paths = Array.from(svgElement.querySelectorAll<SVGPathElement>("path"));

  /** Loop each path to draw the SVG path while the styles from the SVGPathElement. */
  paths.map((p) => {
    const fill = p.getAttribute("fill") || "#FB3640";
    p.style.fill = fill;
    p.style.fillOpacity = "0";

    p.style.stroke = fill;
    p.style.strokeWidth = "1";
    p.style.strokeLinecap = "round";
    p.style.strokeLinejoin = "round";
    p.style.vectorEffect = "non-scaling-stroke";
  });

  // Reset the draw state
  gsap.set(paths, { drawSVG: 0 });

  // Timeline for drawing
  const tl = gsap.timeline();
  tl.to(
    paths,
    {
      drawSVG: "100%",
      stagger: 0.08, // stagger between letters
      ease: "power1.inOut",
      duration: 1,
      delay: 0.3
    },
    0
  ).to(
    paths,
    {
      fillOpacity: 1, // reveal fill after stroke draws
      stagger: 0.08,
      duration: 0.5
    },
    "<20%" // When to start fill the strokes, it's the percentage of when to start the fill.
  );
}
