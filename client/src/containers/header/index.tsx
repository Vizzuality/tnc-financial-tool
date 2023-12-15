"use client";
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { cn } from "@/lib/classnames";

import { useModal } from "@/hooks/modals";

import { NAV_OPTIONS } from "@/containers/header/constants";
import MobileMenuModal from "@/containers/header/mobile-menu-modal";
import MenuButton from "@/containers/header/mobile-menu-modal/menu-button";
import { Media } from "@/containers/media";
import Wrapper from "@/containers/wrapper";

const Header = () => {
  const pathname = usePathname();

  const [page, setPage] = useState(NAV_OPTIONS[0]);

  const { isOpen: isOpenMobile, open: openMobile, close: closeMobile } = useModal();

  return (
    <nav
      className={cn({
        "left-0 top-0 z-50 w-full border-gray-800 bg-gray-900 text-base text-white md:border-b":
          true,
        fixed: isOpenMobile,
      })}
    >
      <Media greaterThanOrEqual="lg">
        <Wrapper>
          <div className="flex items-center justify-between space-x-12 border-b border-gray-900 text-lg">
            <Link href="/" className="flex h-[40px] shrink-0 cursor-pointer items-center space-x-3">
              <Image src="/svgs/naturebase.svg" alt="Logo" width={40} height={20} />
              <p className="font-space-grotesk text-2lg leading-none">financial assessment tool</p>
            </Link>

            <ul className="m-0 flex w-full items-center justify-end space-x-12 p-0">
              {NAV_OPTIONS.map((opt) => (
                <Link key={opt.label} href={opt.href}>
                  <button
                    className="relative m-0 flex cursor-pointer justify-between"
                    onClick={() => setPage(opt)}
                  >
                    <p className="hover:text-brand-700 py-6 text-base">{opt.label}</p>
                    {pathname !== "/" && opt.id === page?.id && (
                      <motion.div
                        className="absolute -bottom-px left-0 right-0 h-[3px] bg-white"
                        layoutId="underline"
                      />
                    )}
                  </button>
                </Link>
              ))}
            </ul>
          </div>
        </Wrapper>
      </Media>

      <Media lessThan="lg">
        <>
          <Wrapper>
            <div className="relative flex h-20 items-center justify-between">
              {!isOpenMobile && (
                <Link
                  href="/"
                  className="flex h-[40px] shrink-0 cursor-pointer items-center space-x-2"
                >
                  <Image src="/svgs/naturebase.svg" alt="Logo" width={40} height={20} />
                  <p className="font-space-grotesk text-lg leading-none">
                    financial assessment tool
                  </p>
                </Link>
              )}
              <motion.div className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">
                <MenuButton
                  isOpen={isOpenMobile}
                  onClick={() => {
                    if (isOpenMobile) {
                      closeMobile();
                    } else {
                      openMobile();
                    }
                  }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                  width={40}
                  height={40}
                />
              </motion.div>
            </div>
          </Wrapper>

          <MobileMenuModal isOpen={isOpenMobile} close={closeMobile} />
        </>
      </Media>
    </nav>
  );
};

export default Header;
