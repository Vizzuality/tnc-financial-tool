"use client";

import { PropsWithChildren, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TooltipProvider } from "@/components/ui/tooltip";
import { spaceGrotesk } from "@/styles/fonts";

export default function LayoutProviders({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <style jsx global>{`
        :root {
          --font-space-grotesk: ${spaceGrotesk.style.fontFamily};
        }
      `}</style>

      <QueryClientProvider client={queryClient}>
        <TooltipProvider>{children}</TooltipProvider>
      </QueryClientProvider>
    </>
  );
}
