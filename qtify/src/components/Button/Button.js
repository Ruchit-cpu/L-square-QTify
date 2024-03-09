import React from "react";
import styles from "./Button.module.css";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

export default function Button({ buttonText }) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <button className={styles.button} onClick={handleOpen}>
        {buttonText}
      </button>
      <FeedbackForm isOpen={open} onClose={handleClose} />
    </>
  );
}
