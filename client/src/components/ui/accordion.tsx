"use client";

import * as React from "react";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { HiMinusSmall, HiPlusSmall } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

import { cn } from "@/lib/classnames";

import Wrapper from "@/containers/wrapper";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-none text-white", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const [open, setOpen] = React.useState(false);

  return (
    <motion.div>
      <AccordionPrimitive.Header
        className={cn({
          "group flex": true,
          "[&[data-state=open]>button]:bg-gray-800": className?.includes("plus-minus"),
          "[&[data-state=open]>button]:bg-gray-900": className?.includes("default"),
        })}
      >
        <AccordionPrimitive.Trigger
          onClick={() => setOpen(!open)}
          ref={ref}
          className={cn(
            "flex flex-1 items-center justify-between rounded-lg bg-gray-900 py-12 text-left font-space-grotesk text-base transition-all group-hover:text-sky md:text-2lg [&[data-state=open]>svg]:rotate-180",
            className,
          )}
          {...props}
        >
          <Wrapper className="flex w-full justify-between">
            <div className="w-3/4">{children}</div>

            {className?.includes("plus-minus") && (
              <>
                {open && (
                  <HiMinusSmall
                    size={24}
                    className="h-7 w-7 shrink-0 fill-sky stroke-sky stroke-2"
                  />
                )}
                {!open && (
                  <HiPlusSmall
                    size={24}
                    className="h-7 w-7 shrink-0 fill-sky stroke-sky stroke-2"
                  />
                )}
              </>
            )}

            {className?.includes("default") && (
              <>
                {open && (
                  <MdOutlineKeyboardArrowDown size={20} className="fill-gray-80 h-7 w-7 shrink-0" />
                )}
                {!open && (
                  <MdOutlineKeyboardArrowUp
                    size={20}
                    className="h-7 w-7 shrink-0 rotate-180 fill-gray-800"
                  />
                )}
              </>
            )}
          </Wrapper>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    </motion.div>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "-mt-6 overflow-hidden bg-gray-800 pb-12 text-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className,
    )}
    {...props}
  >
    <Wrapper>
      <div className="w-3/4 font-space-grotesk opacity-60">{children}</div>
    </Wrapper>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
