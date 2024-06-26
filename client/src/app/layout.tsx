import "@/styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

import type { Metadata } from "next";

import LayoutProviders from "@/app/layout-providers";
import StyledJsxRegistry from "@/app/registry";

import Footer from "@/containers/footer";
import Global from "@/containers/global";
import Header from "@/containers/header";

export const metadata: Metadata = {
  title: "NCS funding tool",
  description:
    "A global study by The Nature Conservancy has identified funding opportunities for NCS",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledJsxRegistry>
      <LayoutProviders>
        <html lang="en">
          <body>
            <Header />
            {children}
            <Global />
            <Footer />
          </body>
        </html>
      </LayoutProviders>
    </StyledJsxRegistry>
  );
}
