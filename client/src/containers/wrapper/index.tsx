import React, { ReactNode } from "react";

import { cn } from "@/lib/classnames";

const Wrapper = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={cn({
        "mx-auto max-w-[1440px] px-4 md:px-12 xl:px-24": true,
        [`${className}`]: className !== undefined,
      })}
    >
      {children}
    </div>
  );
};

export default Wrapper;
