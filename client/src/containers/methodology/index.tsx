"use client";

import Global from "@/containers/global";
import Wrapper from "@/containers/wrapper";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const METHODOLOGY_POINTS = [
  {
    question: "Overview of NCS funding study objectives",
    answer:
      "<p>NCS is poised to play a key role in helping the world reach net zero, with the <b>potential to contribute ~20-30% of what is needed to stabilize the climate by 2030</b>; however, there is still an outstanding question on how to fund NCS at scale – at the project level, sufficient catalytic capital is often hard to find, and at a global level, studies suggest that we need $400B/yr just to finance forestry pathways.</p><br/><p>The NCS funding landscape <b>varies significantly by country</b>, and adopting a country-level view is required to understand opportunities and identify actionable insights; Bain and TNC partnered for <b>4-months to survey the NCS funding landscape</b> in 10 focus countries to address the following focus areas:</p><br/><ul><li>Estimate of current NCS funding sources and challenges to achieving full potential</li><li>Opportunities to increase available NCS funding and funding effectiveness</li><li>Assessment of harmful economic activities (e.g., gov’t subsidies)</li><li>Identification of NCS funding implications, opportunities, & key priorities across focus countries</li></ul>",
  },
  {
    question: "Definition of NCS for this funding study",
    answer: "",
  },
  {
    question: "Scope of NCS funding for this study",
    answer: "",
  },
  {
    question: "Seven steps to estimate NCS funding available and assess funding opportunities",
    answer: "",
  },
];

const Methodology = (): JSX.Element => {
  return (
    <>
      <Wrapper>
        <h4 className="pb-12 pt-36 font-space-grotesk text-3xl text-white">Methodology</h4>
      </Wrapper>
      <div className="accordion mb-20 flex flex-col">
        {METHODOLOGY_POINTS.map((faq, idx) => (
          <Accordion type="single" collapsible key={idx}>
            <AccordionItem value="item-1">
              <AccordionTrigger className="plus-minus">{faq.question}</AccordionTrigger>

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
      <Global />
    </>
  );
};

export default Methodology;
