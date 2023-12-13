"use client";

import { useCallback, useState } from "react";

import Wrapper from "@/containers/wrapper";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    category: "NCS Funding Taxonomy",
    question:
      "REDD+ and LEAF overlapasLEAF is a funding mechanism for REDD+. Additionally,both REDD+ generally and LEAF specifically have market and non-market elements. Should the market elements be included under the carbon markets section?",
    answer: "",
  },
  {
    category: null,
    question:
      "Are you going to align the taxonomy to reflect the 'gold standard'taxonomy for conservation finance?",
    answer:
      "<div><a href='#'>The NCS funding taxonomy</a> was developed in partnership with TNC Global and reviewed by membersof the TNC country teams. The taxonomy reflects some elements of the CFA taxonomy, but ultimately highlights the NCS funding sources that surfaced most frequently across geographies.</div>",
  },
  {
    category: null,
    question:
      "The private column in thetaxonomy looks short.Are you considering financial solutions for agricultural producersto switch to sustainable production?",
    answer: "",
  },
  {
    category: "NCS Current Funding Estimates & Approach",
    question:
      "Is possible tosplitout theall the individual funding sources (Adaptation Fund, GCF, GEF, etc.for India) as aspecific line item under international aid?",
    answer: "",
  },
  {
    category: null,
    question: "Is there alist of all funding sources in an annexsomewhere?",
    answer: "",
  },
  {
    category: "NCS Funding Efficiency",
    question:
      "How is efficiency defined? Commitments vs disbursement? Is there a time horizon in this? (E.g.,not spent after X years?)",
    answer: "",
  },
  {
    category: "New Funding Sources",
    question: "How is feasibility to implement of new funding sources decided? Who decides this?",
    answer: "",
  },
  {
    category: "Negative Flows",
    question:
      "Are thereany positive flows that are dependent on negative flows?E.g.,in the United States, building a highway (negativeimpact) is tied to wetland banking (positive flow).",
    answer: "",
  },
  {
    category: null,
    question:
      "Can we also identify top companies within harmful industries?That would be useful for our corporate engagement team to keep in mind when we are approached by them.",
    answer: "",
  },
  {
    category: null,
    question:
      "Are we looking at political appetite and/or industry lobbying power for negative subsidies?",
    answer: "",
  },
  {
    category: null,
    question:
      "Based on thesocial implicationsof rural development,is this report examining feasibility around social acceptanceorjust usingan economic lens?",
    answer: "",
  },
];

const Faqs = (): JSX.Element => {
  const [values, setValues] = useState(["1"]);

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
