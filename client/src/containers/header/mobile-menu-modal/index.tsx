import React from "react";

import Link from "next/link";

import { UseModalReturnProps } from "@/hooks/modals/types";

import { NAV_OPTIONS } from "@/containers/header/constants";
import FullScreenModal from "@/containers/header/full-screen-modal";
import Wrapper from "@/containers/wrapper";

const MobileMenuModal = ({
  isOpen,
  close,
}: {
  isOpen: UseModalReturnProps["isOpen"];
  close: UseModalReturnProps["close"];
}) => {
  return (
    <FullScreenModal
      open={isOpen}
      theme="dark"
      closeBtn={false}
      onOpenChange={() => close()}
      zIndex="z-[10]"
    >
      <section className="z-10 h-screen w-full bg-gray-900 text-center font-sans text-white">
        <Wrapper className="flex h-[60vh] flex-col justify-between">
          <div className="flex flex-col space-y-10 pb-32 pt-12">
            {NAV_OPTIONS.map((o) => (
              <Link key={o.id} href={o.href} target="_blank" className="text-lg text-white">
                <div onClick={() => close()}>{o.label}</div>
              </Link>
            ))}
          </div>
        </Wrapper>
      </section>
    </FullScreenModal>
  );
};

export default MobileMenuModal;
