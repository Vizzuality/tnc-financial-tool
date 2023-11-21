import { DRIVERS } from "@/constants/drivers";

export const BACKGROUND = "#1E2D3A";

export const LABEL_MARGIN = 80;

export const DRIVERS_COLORS = [
  {
    id: "treemap",
    name: "Treemap",
    color: BACKGROUND,
  },
  ...DRIVERS,
];

export const TRANSITION = {
  duration: 0.5,
  ease: "easeInOut",
};
