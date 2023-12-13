"use client";
import Image from "next/image";

import { cn } from "@/lib/classnames";

import { Media } from "@/containers/media";
import Wrapper from "@/containers/wrapper";

const Global = (): JSX.Element => {
  return (
    <>
      <Media greaterThanOrEqual="lg">
        <div className="w-full bg-ocean py-20 font-space-grotesk">
          <Wrapper>
            <div
              className={cn({
                "relative border border-transparent": true,
              })}
            >
              <Image
                src="/images/mockup/app.svg"
                alt="Naturebase"
                width={608}
                height={608}
                className="mb-12 ml-auto h-auto w-3/4 overflow-hidden"
              />

              <div className="absolute bottom-0 left-0 flex h-auto max-w-[408px] flex-col space-y-2.5 bg-sand p-10 text-left text-base text-gray-900 sm:p-6 md:ml-0 lg:mr-[5%] lg:p-10">
                <h3 className="text-xl leading-10">
                  Unlock nature’s potential to mitigate climate change with naturebase
                </h3>
                <h4 className="text-base">
                  Join the naturebase community and be among the first to test the tool.
                </h4>
                <a
                  className="group flex flex items-center justify-end space-x-2 pt-14 text-base"
                  href="https://app.naturebase.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="whitespace-nowrap text-gray-900 transition-transform">Launch app</p>
                  <Image
                    src="/svgs/arrow-right.svg"
                    alt="Launch app"
                    width={18}
                    height={12}
                    className="h-4 w-6 text-gray-900 transition-transform group-hover:translate-x-2"
                  />
                </a>
              </div>
            </div>
          </Wrapper>
        </div>
      </Media>

      <Media lessThan="lg">
        <div className="w-full bg-sand py-10 font-space-grotesk text-gray-900">
          <Wrapper>
            <div>
              <Image
                src="/images/mockup/app-mobile.svg"
                alt="Naturebase"
                width={1000}
                height={1000}
                className="h-full w-full"
              />
              <div className="mt-10 space-y-4">
                <h3 className="text-2xl">
                  Unlock nature’s potential to mitigate climate change with naturebase
                </h3>
                <h4 className="text-base">
                  Join the naturebase community and be among the first to test the tool.
                </h4>
                <a
                  className="flex w-full items-center justify-center rounded-full border border-gray-900 py-4 text-base font-semibold transition-all hover:bg-gray-900 hover:text-white"
                  href="https://app.naturebase.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Launch Naturebase app
                </a>
              </div>
            </div>
          </Wrapper>
        </div>
      </Media>
    </>
  );
};

export default Global;
