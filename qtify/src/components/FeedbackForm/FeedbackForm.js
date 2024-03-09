import React from "react";
import style from "./FeedbackForm.module.css";
export default function FeedbackForm({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <>
      <div className={style.overlay} onClick={onClose}></div>
      <div className={style.modal}>
        <div className={style.modalContent}>
          <div className={style.header}>
            <p>
              Feedback{" "}
              <span className={style.close} onClick={onClose}>
                &times;
              </span>{" "}
            </p>
          </div>
          <div className={style.form}>
            <input placeholder="Full Name" />
            <input placeholder="Email ID" />
            <input placeholder="Subject" />
            <input placeholder="Description" className={style.description} />
          </div>
          <div>
            <button className={style.button} onClick={onClose}>
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
