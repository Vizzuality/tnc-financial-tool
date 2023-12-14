"use client";

import { useCallback, useState } from "react";

import { FAQS } from "@/containers/faqs/constants";
import Wrapper from "@/containers/wrapper";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = (): JSX.Element => {
  const [values, setValues] = useState(["0"]);

  const handleOpenAccordions = useCallback((idx: string) => {
    setValues((prevValue) =>
      prevValue.includes(idx) ? prevValue.filter((id) => id !== idx) : [...prevValue, idx],
    );
  }, []);

  return (
    <>
      <Wrapper>
        <h4 className="pb-12 pt-36 font-space-grotesk text-3xl text-white">
          Frequently asked questions
        </h4>
      </Wrapper>
      <div className="mb-20 flex flex-col">
        {FAQS.map((faq, idx) => (
          <>
            {faq.category && (
              <Wrapper className="flex w-full items-center space-x-2 py-4">
                <h5 className="whitespace-nowrap font-space-grotesk text-sm font-semibold uppercase tracking-widest text-white">
                  {faq.category}
                </h5>
                <div className="h-px w-full bg-climate" />
              </Wrapper>
            )}

            <Accordion
              key={idx}
              className="accordion"
              type="multiple"
              value={values}
              onValueChange={() => handleOpenAccordions(`${idx}`)}
            >
              <AccordionItem value={`${idx}`}>
                <AccordionTrigger className="plus-minus">{faq.question}</AccordionTrigger>

                <AccordionContent>
                  <div
                    className="dangerouslySetInnerHTML"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </>
        ))}
      </div>
    </>
  );
};

export default Faqs;
