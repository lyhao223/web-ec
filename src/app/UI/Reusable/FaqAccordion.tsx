import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import React from "react";
import { FaArrowDown } from "react-icons/fa6";
interface Props {
  accordionTitle: string;
  children: string;
}
const FaqAccordion = ({ accordionTitle, children }: Props) => {
  return (
    <Accordion
      className="xl:text-xl text-lg tracking-normal xl:w-fit w-80"
      slotProps={{ transition: { timeout: 500 } }}>
      <AccordionSummary expandIcon={<FaArrowDown color="black" />}>
        {accordionTitle}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default FaqAccordion;
