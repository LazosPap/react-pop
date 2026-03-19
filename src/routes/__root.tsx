import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import gsap from "gsap";
import { DrawSVGPlugin, SplitText } from "gsap/all";

/** Call the gsap plugins on the root so we don't have to call them on each file. */
gsap.registerPlugin(DrawSVGPlugin, SplitText);

const RootLayout = () => (
  <>
    <Outlet />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
