import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ReusableAccordion({ header, data }) {
  return (
    <Accordion
      sx={{
        width: "1135px",
        backgroundColor: "rgba(255, 255, 255, 1)",
        color: "rgba(18, 18, 18, 1)",
        borderRadius: "0px 0px 10px 10px",
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "27px",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          "& .MuiAccordionSummary-expandIconWrapper": {
            color: "rgba(52, 201, 75, 1)",
          },
          "& .MuiSvgIcon-root": {
            width: "2em",
            height: "2em",
          },
          backgroundColor: "rgba(18, 18, 18, 1)",
          color: "white",
          border: "1px solid rgba(255, 255, 255, 1)",
          borderRadius: "10px",
          fontFamily: "Poppins",
          fontWeight: "500",
          fontSize: "20px",
          lineHeight: "30px",
        }}
      >
        {header}
      </AccordionSummary>
      <AccordionDetails>{data}</AccordionDetails>
    </Accordion>
  );
}
