import { Transition, SVGMotionProps } from "framer-motion";

export interface MenuButtonProps extends SVGMotionProps {
  isOpen?: boolean;
  height?: number;
  lineProps?: {
    stroke?: string;
    strokeWidth?: string;
    vectorEffect?: string;
    initial?: "closed" | "open";
    animate?: variant;
    transition?: Transition;
  };
  transition?: Transition;
  width?: number;
  onClick: () => void;
}
