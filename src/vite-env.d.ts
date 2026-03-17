/// <reference types="vite-plugin-svgr/client" />

/** Declare it so we can barrel index for svg's */
declare module "*.svg" {
  const content: string;
  export default content;
}
