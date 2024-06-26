"use client";

import { AnimatePresence, motion } from "framer-motion";

import { DRIVERS } from "@/constants/drivers";

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

interface LegendProps {
  mode: "drivers" | "gap";
}

const Legend = ({ mode }: LegendProps): JSX.Element => {
  return (
    <div className="container pointer-events-none absolute bottom-10 right-0 flex justify-end pt-20">
      <AnimatePresence>
        {mode === "drivers" && (
          <motion.footer {...variants}>
            <ul className="flex space-x-5 pt-5">
              {DRIVERS.map((d) => (
                <li key={d.id} className="flex items-center space-x-2">
                  <div
                    className="h-6 w-2"
                    style={{
                      backgroundColor: d?.color,
                    }}
                  />
                  <span className="text-sm">{d.name}</span>
                </li>
              ))}
            </ul>
          </motion.footer>
        )}

        {mode === "gap" && (
          <motion.footer {...variants}>
            <ul className="flex space-x-5">
              {[
                ...DRIVERS,
                {
                  id: "gap",
                  name: "Funding Gap",
                  color: "#E23248",
                },
              ].map((d) => {
                return (
                  <li key={d.id} className="flex items-center space-x-2">
                    <div
                      className="h-6 w-2"
                      style={{
                        backgroundColor: d?.color,
                      }}
                    />
                    <span className="text-sm">{d.name}</span>
                  </li>
                );
              })}
            </ul>
          </motion.footer>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Legend;
