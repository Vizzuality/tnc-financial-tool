import { ReactNode } from "react";

export interface ModalProps {
  /**
   * Whether the modal is opened
   */
  open: boolean;
  /**
   * Whether the user can close the modal by clicking on the overlay, the close button or pressing
   * the escape key
   */
  dismissable?: boolean;

  theme?: "light" | "dark";

  closeBtn?: boolean;

  zIndex?: string;

  children?: ReactNode;
  /**
   * Class name to assign to the modal
   */
  className?: string;
  /**
   * Callback executed when the modal open change
   */
  onOpenChange: (open: boolean) => void;
}
