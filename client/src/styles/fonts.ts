import localFont from "next/font/local";

export const spaceGrotesk = localFont({
  src: [
    {
      path: "./SpaceGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./SpaceGrotesk-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./SpaceGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "block",
  variable: "--font-space-grotesk",
});
