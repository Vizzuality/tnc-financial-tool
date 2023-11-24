"use client";
import React, { useCallback } from "react";

import { Form, Field } from "react-final-form";

import Image from "next/image";

// import { useSaveSubscribe } from "hooks/subscribe";
// import { useToasts } from "hooks/toast";

import { cn } from "@/lib/classnames";

import { Media } from "@/containers/media";
import Wrapper from "@/containers/wrapper";

import { composeValidators } from "@/components/forms/validations";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  // const { addToast } = useToasts();
  // const saveSubscribeMutation = useSaveSubscribe({});

  const onSubmit = useCallback(
    (/* data, form */) => {
      // saveSubscribeMutation.mutate(
      //   { data },
      //   {
      //     onSuccess: () => {
      //       addToast(
      //         "success-contact",
      //         <>
      //           <p className="text-base">You have successfully subscribed.</p>
      //         </>,
      //         {
      //           level: "success",
      //         },
      //       );
      //       form.reset();
      //     },
      //     onError: () => {
      //       addToast(
      //         "error-contact",
      //         <>
      //           <p className="text-base">Oops! Something went wrong</p>
      //         </>,
      //         {
      //           level: "error",
      //         },
      //       );
      //     },
      //   },
      // );
    },
    [
      /* addToast, saveSubscribeMutation */
    ],
  );

  return (
    <section className="w-full bg-gray-900 pt-10 lg:pt-14">
      <Wrapper>
        <div className="flex flex-col justify-between space-y-10 lg:flex-row lg:space-y-0">
          <div className="space-y-10 lg:space-y-20">
            <a href={"https://www.naturebase.org"} target="_blank">
              <Image
                src="/svgs/naturebase.svg"
                alt="Earth"
                width={250}
                height={100}
                className="h-24 w-64"
              />
            </a>

            <div className="flex flex-col space-y-4 font-space-grotesk text-base text-white lg:flex-row lg:space-x-6 lg:space-y-0">
              <div className="space-y-5">
                <a href={"https://www.naturebase.org/about"} target="_blank">
                  About
                </a>
                <div className="flex flex-col space-y-2">
                  <a
                    className="opacity-60 hover:opacity-100"
                    href={"https://www.naturebase.org/about#naturbase"}
                    target="_blank"
                  >
                    About Naturebase
                  </a>
                  <a
                    className="opacity-60 hover:opacity-100"
                    href={"https://www.naturebase.org/about#who"}
                    target="_blank"
                  >
                    Who is with us?
                  </a>

                  <a
                    className="opacity-60 hover:opacity-100"
                    href={"https://www.naturebase.org/about#users"}
                    target="_blank"
                  >
                    Who can use?
                  </a>

                  <a
                    className="opacity-60 hover:opacity-100"
                    href={"https://www.naturebase.org/about#faq"}
                    target="_blank"
                  >
                    FAQ
                  </a>
                </div>
              </div>
              <div className="space-y-5">
                <a href={"https://www.naturebase.org/science"} target="_blank">
                  Science and data
                </a>

                <div className="flex flex-col space-y-2">
                  <a
                    className="opacity-60 hover:opacity-100"
                    href={"https://www.naturebase.org/science#pathways"}
                    target="_blank"
                  >
                    NCS pathways
                  </a>

                  <a
                    className="opacity-60 hover:opacity-100"
                    href={"https://www.naturebase.org/science#data"}
                    target="_blank"
                  >
                    Data sources
                  </a>
                </div>
              </div>
              <div className="space-y-5">
                <a href={"https://www.naturebase.org/news"} target="_blank">
                  News
                </a>
              </div>
              <div className="space-y-5">
                <a href={"https://www.naturebase.org/involved"} target="_blank">
                  Get involved
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-4 pt-6 lg:space-y-6">
            <Image
              src="/svgs/newsletter.svg"
              alt="Earth"
              width={40}
              height={40}
              className="h-10 w-10 lg:h-12 lg:w-12"
            />
            <h2 className="font-space-grotesk text-2lg text-white lg:text-3xl">Stay tuned</h2>
            <p className="text-base text-white">Subscribe to our newsletter</p>
            <Form initialValues={{ email: "" }} onSubmit={onSubmit}>
              {({ handleSubmit, form }) => {
                return (
                  <form noValidate onSubmit={handleSubmit}>
                    <div className="flex w-full flex-col justify-between space-y-4 lg:flex-row lg:space-y-0">
                      <Field
                        name="email"
                        component="input"
                        validate={composeValidators([{ presence: true, email: true }])}
                      >
                        {({ input, meta }) => (
                          <div className="w-full">
                            <input
                              {...input}
                              value={input.value as string}
                              type="email"
                              placeholder="Enter your email"
                              className={cn({
                                "focus:ring-brand-700 flex h-12 w-full min-w-[287px] rounded-3xl border-none bg-white px-6 text-base text-gray-800 transition delay-150 duration-300 ease-in-out placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset lg:rounded-l-3xl lg:rounded-r-none ":
                                  true,
                                "ring-2 ring-red-600 focus:ring-red-600":
                                  form.getState().submitFailed && meta.error,
                              })}
                            />
                          </div>
                        )}
                      </Field>

                      <Button
                        size="sm"
                        type="submit"
                        className="h-12 rounded-3xl bg-turquoise px-6 lg:rounded-l-none"
                      >
                        <p>Subscribe</p>
                      </Button>
                    </div>
                  </form>
                );
              }}
            </Form>
          </div>
        </div>
      </Wrapper>
      <div className="mt-10 bg-gray-800 py-6 lg:mt-14">
        <Media lessThan="lg">
          <Wrapper className="pb-12">
            <p className="font-space-grotesk text-[14px] text-white opacity-60">
              Additional{" "}
              <a
                href="https://conservationgateway.org/Pages/Terms-of-Use.aspx"
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline"
              >
                Terms of Use
              </a>{" "}
              and data limitations when working with naturebase data apply. By using this website
              you agree to the full{" "}
              <a
                href="https://www.nature.org/en-us/about-us/who-we-are/accountability/terms-of-use"
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline"
              >
                Legal Disclosures
              </a>{" "}
              and{" "}
              <a
                href="https://www.nature.org/en-us/about-us/who-we-are/accountability/privacy-policy"
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline"
              >
                Privacy Statements
              </a>
              .
            </p>
          </Wrapper>
        </Media>
        <Wrapper className="flex items-center justify-between">
          <Media greaterThanOrEqual="lg">
            <p className="max-w-lg font-space-grotesk text-[14px] text-white opacity-60">
              Additional{" "}
              <a
                href="https://conservationgateway.org/Pages/Terms-of-Use.aspx"
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline"
              >
                Terms of Use
              </a>{" "}
              and data limitations when working with naturebase data apply. By using this website
              you agree to the full{" "}
              <a
                href="https://www.nature.org/en-us/about-us/who-we-are/accountability/terms-of-use"
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline"
              >
                Legal Disclosures
              </a>{" "}
              and{" "}
              <a
                href="https://www.nature.org/en-us/about-us/who-we-are/accountability/privacy-policy"
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline"
              >
                Privacy Statements
              </a>
              .
            </p>
          </Media>
          <div className="flex w-full items-center justify-between lg:w-[400px] lg:flex-row-reverse">
            <a href="https://nature4climate.org" rel="noreferrer" target="_blank">
              <Image
                src="/svgs/nature4Climate.svg"
                alt="Earth"
                width={200}
                height={200}
                className="h-14 w-28"
              />
            </a>
            <p className="font-sans font-space-grotesk text-base text-white opacity-60">
              Supported by Bezos Earth Fund
            </p>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default Footer;
