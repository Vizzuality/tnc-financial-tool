"use client";

import { PropsWithChildren, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { MediaContextProvider, mediaStyle } from "@/containers/media";

import { TooltipProvider } from "@/components/ui/tooltip";

import { spaceGrotesk } from "@/styles/fonts";

export default function LayoutProviders({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <MediaContextProvider>
      <style type="text/css" jsx global>
        {`
          :root {
            --font-space-grotesk: ${spaceGrotesk.style.fontFamily};
          }

          ${mediaStyle}
        `}
      </style>

      <QueryClientProvider client={queryClient}>
        <TooltipProvider>{children}</TooltipProvider>
      </QueryClientProvider>
    </MediaContextProvider>
  );
}
