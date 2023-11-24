import { FC } from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import { cn } from "@/lib/classnames";

import type { FullScreenModalProps } from "./types";

export const FullScreenModal: FC<FullScreenModalProps> = ({
  children,
  className,
  closeBtn = true,
  floating,
  getFloatingProps,
  onOpenChange,
}: FullScreenModalProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className={cn({
        "lg:5/5 pointer-events-auto flex h-full w-full flex-col overflow-hidden bg-white outline-none":
          true,
        [className || ""]: !!className,
      })}
      {...getFloatingProps({
        ref: floating,
      })}
    >
      <div className="relative flex grow flex-col overflow-hidden">
        {closeBtn && (
          <button
            type="button"
            onClick={() => {
              onOpenChange(false);
            }}
            className="absolute right-9 top-8 z-50 flex items-center text-sm text-gray-300"
          >
            <Image
              src="/svgs/close.svg"
              alt="Close"
              className="inline-block h-7 w-7 stroke-white"
              width={20}
              height={20}
              layout="fixed"
            />
          </button>
        )}

        {children}
      </div>
    </motion.div>
  );
};

export default FullScreenModal;
