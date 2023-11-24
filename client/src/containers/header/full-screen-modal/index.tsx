import {
  useFloating,
  useInteractions,
  useRole,
  FloatingPortal,
  FloatingFocusManager,
  FloatingOverlay,
} from "@floating-ui/react-dom-interactions";
import { AnimatePresence, motion } from "framer-motion";

import { Media } from "@/containers/media";

import ModalContent from "./content";
import { ModalProps } from "./types";

export const FullScreenModal = (props: ModalProps) => {
  const { open, onOpenChange, zIndex = "z-10" } = props;

  const { floating, context } = useFloating({
    open,
    onOpenChange,
  });

  const { getFloatingProps } = useInteractions([useRole(context)]);

  const overlayFramerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <FloatingPortal>
      <AnimatePresence>
        {open && (
          <FloatingOverlay lockScroll className={`${zIndex}`}>
            <FloatingFocusManager context={context}>
              <>
                <Media lessThan="lg">
                  <motion.div
                    {...overlayFramerVariants}
                    className="pointer-events-none absolute left-0 top-20 z-50 flex h-[calc(100%-theme(space.20))] w-full grow flex-col"
                  >
                    <ModalContent
                      {...props}
                      floating={floating}
                      getFloatingProps={getFloatingProps}
                    />
                  </motion.div>
                </Media>

                <Media greaterThanOrEqual="lg">
                  <motion.div
                    {...overlayFramerVariants}
                    className="pointer-events-none absolute left-0 top-0 z-50 flex h-full w-full grow flex-col"
                  >
                    <ModalContent
                      {...props}
                      viewport="sm"
                      floating={floating}
                      getFloatingProps={getFloatingProps}
                    />
                  </motion.div>
                </Media>
              </>
            </FloatingFocusManager>
          </FloatingOverlay>
        )}
      </AnimatePresence>
    </FloatingPortal>
  );
};

export default FullScreenModal;
