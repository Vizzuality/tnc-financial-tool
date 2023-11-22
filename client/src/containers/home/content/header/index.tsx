"use client";

import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/classnames";

const variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      delay: 0,
      duration: 0.25,
    },
  },
};

interface HeaderProps {
  mode: "drivers" | "gap" | "opportunities";
  unit: "absolute" | "relative";
  onUnitChange: (unit: "absolute" | "relative") => void;
}

const Header = ({ mode, unit, onUnitChange }: HeaderProps): JSX.Element => {
  return (
    <div className="relative h-32">
      <AnimatePresence>
        {mode === "drivers" && (
          <motion.header
            {...variants}
            className="absolute left-0 top-0 flex w-full justify-between"
          >
            <div className="space-y-2.5 2xl:space-y-5">
              <h1 className="text-sm font-bold uppercase tracking-widest">Funding drivers</h1>
              <p className="max-w-xl text-2lg">
                <span className="text-grass">Public domestic funding</span> is the largest driver of
                NCS funding in 6 of 8 focus countries.
              </p>
            </div>
          </motion.header>
        )}

        {mode === "gap" && (
          <motion.header
            {...variants}
            className="absolute left-0 top-0 flex w-full items-end justify-between"
          >
            <div className="space-y-2.5 2xl:space-y-5">
              <h1 className="text-sm font-bold uppercase tracking-widest">Funding needs</h1>
              <p className="max-w-xl text-2lg">
                Half of focus countries have <span className="text-red-600">less than 5%</span> of
                NCS funding needed.
              </p>
            </div>

            <div className="space-x-1 border border-white/20 p-2">
              <button
                key="absolute-button"
                className={cn({
                  "px-2 py-1 text-sm": true,
                  "hover:bg-white/10": unit !== "absolute",
                  "bg-white text-gray-900": unit === "absolute",
                })}
                onClick={() => onUnitChange("absolute")}
              >
                Absolute
              </button>

              <button
                key="relative-button"
                className={cn({
                  "px-2 py-1 text-sm": true,
                  "hover:bg-white/10": unit !== "relative",
                  "bg-white text-gray-900": unit === "relative",
                })}
                onClick={() => onUnitChange("relative")}
              >
                Relative GDP
              </button>
            </div>
          </motion.header>
        )}

        {mode === "opportunities" && (
          <motion.header
            {...variants}
            className="absolute left-0 top-0 flex w-full justify-between"
          >
            <div className="space-y-2.5 2xl:space-y-5">
              <h1 className="text-sm font-bold uppercase tracking-widest">Funding opportunities</h1>
              <p className="max-w-4xl text-2lg">
                Policy reforms, carbon markets, and nature-positive economies have the greatest
                potential to <span className="text-sky">accelerate the implementation of NCS.</span>
              </p>
            </div>
          </motion.header>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
