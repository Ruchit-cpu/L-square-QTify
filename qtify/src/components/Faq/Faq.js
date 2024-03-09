import React, { useEffect, useState } from "react";
import style from "./Faq.module.css";
import axios from "axios";
import ReusableAccordion from "../Accordion/Accordion";
import { CircularProgress } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function Faq() {
  const [faqData, setFaqData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend-labs.crio.do/faq"
        );
        setFaqData(response.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={style.faq}>
      <h1>FAQs</h1>
      {faqData.length ? (
        faqData.map((accord) => (
          <ReusableAccordion header={accord.question} data={accord.answer} />
        ))
      ) : (
        <Stack>
          <CircularProgress color="success" />
        </Stack>
      )}
    </div>
  );
}
