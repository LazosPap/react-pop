import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/all";
import { Printer } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { ARRANGEMENTS, IMAGE_IDS, IMAGE_MAP, ITEM_SIZES, MODES } from "@/features/home/constants";
import { ArrangementMode } from "@/features/home/types";

/** Hero component while using GSAP for Flipping images. */
export function Hero() {
  /** Init the refs for the GSAP. */
  const desk = useRef<HTMLDivElement | null>(null);
  const header = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  /** State for the button we switch modes. */
  const [activeMode, setActiveMode] = useState<ArrangementMode>("START");

  const setLayout = (mode: ArrangementMode) => {
    if (!desk.current || !header.current) return;

    const deskWidth = desk.current.offsetWidth;
    const deskHeight = desk.current.offsetHeight;

    const layout = ARRANGEMENTS[mode];
    const isMobile = deskWidth < 1000;

    const offsetX = isMobile
      ? header.current.offsetWidth / 2
      : layout.header.center
        ? header.current.offsetWidth / 2
        : 0;

    const offsetY = isMobile
      ? header.current.offsetHeight / 2
      : layout.header.center
        ? header.current.offsetHeight / 2
        : 0;

    const headerX = isMobile ? 50 : layout.header.x;
    const headerY = isMobile ? 47.5 : layout.header.y;

    gsap.set(header.current, {
      x: (headerX / 100) * deskWidth - offsetX,
      y: (headerY / 100) * deskHeight - offsetY,
      rotation: 0
    });

    layout.items.map(({ id, x, y, rotation, opacity = 1, zIndex }, index) => {
      const el = itemRefs.current[index];
      if (!el) return;

      const key = id as keyof typeof ITEM_SIZES;

      /** Define for each image seperate options based on the key from the array. */
      gsap.set(el, {
        x: (x / 100) * deskWidth,
        y: (y / 100) * deskHeight,
        width: ITEM_SIZES[key],
        height: ITEM_SIZES[key],
        rotation: rotation,
        opacity: opacity,
        zIndex: zIndex
      });

      /** Transition for the opacity. */
      gsap.to(el, {
        opacity: opacity,
        duration: 2,
        ease: "power2.out",
        stagger: 0.5
      });
    });
  };

  /** GSAP animation switch for each button we use Flip. */
  const switchMode = (mode: ArrangementMode) => {
    if (mode === activeMode) return;

    const flipTargets = [header.current!, ...itemRefs.current];
    const state = Flip.getState(flipTargets);

    setLayout(mode);

    Flip.from(state, {
      duration: 1.25,
      ease: "power3.inOut",
      // stagger: { amount: 0.1, from: "center" },
      absolute: true
    });

    setActiveMode(mode);
  };

  /** First init of the GSAP animation. */
  useGSAP(
    () => {
      setLayout("START");
    },
    { scope: desk }
  );

  return (
    <section
      ref={desk}
      className="relative mt-0 h-[80svh] w-full max-w-350
        [@media(max-width:1400px)]:overflow-x-hidden"
    >
      <div
        ref={header}
        className="pointer-events-none absolute z-10 flex w-100 flex-col gap-3 text-center"
      >
        <h1 className="text-2xl font-bold">React Pop</h1>
        <p className="text-gray-500">New components coming soon.</p>
      </div>
      {IMAGE_IDS.map((id, index) => (
        <div
          key={id}
          ref={(el) => {
            if (el) itemRefs.current[index] = el;
          }}
          id={id}
          className="item will-change-[transform, top,left] absolute"
        >
          <img src={IMAGE_MAP[id]} className="h-full w-full object-contain" />
        </div>
      ))}
      <div className="fixed bottom-[20.5svh] left-1/2 z-10 hidden -translate-x-1/2 gap-2 lg:flex">
        {MODES.map((mode) => (
          <Button
            key={mode}
            className={`focus:border-accent rounded-md border p-2 focus:bg-slate-200
            focus:outline-none ${activeMode === mode ? "bg-gray-200" : ""}`}
            onClick={() => switchMode(mode as ArrangementMode)}
          >
            <Printer />
          </Button>
        ))}
      </div>
    </section>
  );
}
