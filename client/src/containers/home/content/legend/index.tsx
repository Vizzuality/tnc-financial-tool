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
  mode: "drivers" | "gap" | "opportunities";
}

const Legend = ({ mode }: LegendProps): JSX.Element => {
  return (
    <div className="relative pt-10">
      <AnimatePresence mode="wait">
        {mode === "drivers" && (
          <motion.footer {...variants} key="footer-drivers">
            <ul className="flex space-x-5">
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
          <motion.footer {...variants} key="footer-needs">
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

        {mode === "opportunities" && (
          <motion.footer
            {...variants}
            key="footer-opportunities"
            className="flex w-full justify-end"
          >
            <div className="space-y-2">
              <h3 className="text-right text-sm font-bold">Funding source and cost ($B):</h3>
              <ul className="flex flex-col items-end space-y-0">
                {DRIVERS.map((d) => (
                  <li key={d.id} className="flex items-center space-x-2">
                    <span className="text-xs">{d.name}</span>

                    <ul className="flex">
                      {[1, 0.64, 0.32].map((v) => (
                        <li
                          key={v}
                          className="h-2 w-10"
                          style={{
                            backgroundColor: d?.color,
                            opacity: v,
                          }}
                        />
                      ))}
                    </ul>
                  </li>
                ))}
                <li key="labels" className="flex items-center space-x-2">
                  <ul className="flex justify-between">
                    {[">1.5B", null, "<0.5B"].map((v) => (
                      <li key={v} className="h-2 w-10 text-center text-[10px]">
                        {v}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </motion.footer>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Legend;
