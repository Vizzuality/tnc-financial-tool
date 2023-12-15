"use client";

import { useCallback, useState } from "react";

import { METHODOLOGY_POINTS } from "@/containers/methodology/constants";
import Wrapper from "@/containers/wrapper";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Methodology = (): JSX.Element => {
  const [values, setValues] = useState(["0"]);

  const handleOpenAccordions = useCallback((idx: string) => {
    setValues((prevValue) =>
      prevValue.includes(idx) ? prevValue.filter((id) => id !== idx) : [...prevValue, idx],
    );
  }, []);

  return (
    <>
      <Wrapper>
        <h4 className="pb-12 pt-36 font-space-grotesk text-3xl text-white">Methodology</h4>
      </Wrapper>
      <div className="accordion mb-20 flex flex-col">
        {METHODOLOGY_POINTS.map((faq, idx) => (
          <Accordion
            key={idx}
            type="multiple"
            value={values}
            onValueChange={() => handleOpenAccordions(`${idx}`)}
          >
            <AccordionItem value={`${idx}`}>
              <AccordionTrigger defaultChecked={idx === 0} className="plus-minus">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent>
                <div
                  className="dangerouslySetInnerHTML"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default Methodology;
