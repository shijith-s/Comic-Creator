import React, { useEffect, useState } from "react";
import "../styles/comicTextModal.css";
import { isTextEmpty } from "../utils/general";

function ComixTextModal({
  open,
  currPageId,
  closeModal,
  currText,
  generate,
  setAlert,
}) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(currText);
  }, [open, currText]);

  const handleChange = (e) => {
    let txt = e.target.value;
    setText(txt);
  };

  const submitText = () => {
    if (isTextEmpty(text)) {
      setAlert({
        alert: true,
        message: "Text is empty. Please enter some content.",
        severity: "error",
      });
      return;
    }
    setAlert({
      alert: true,
      message: "Generating images. Please wait...",
      severity: "success",
    });
    generate(currPageId, text);
    closeModal();
  };
  if (!open) return;
  return (
    <div className="comic__text__modal">
      <div className="comic__text__modal__title">
        <h3>Imagination Station</h3>
      </div>
      <div className="comic__text__modal__content">
        <div className="comic__text__modal__description">
          <p>
            Craft a mini-story for this image. Your words will fuel AI
            creativity. Go on, paint with brevity!
          </p>
        </div>

        <textarea
          className="comic__text__modal__textarea"
          value={text}
          onChange={handleChange}
          placeholder="Compose your vibrant tale..."
        />
      </div>
      <div className="comic__text__modal__btns">
        <button onClick={closeModal}>Cancel</button>
        <button onClick={submitText}>Generate</button>
      </div>
    </div>
  );
}

export default ComixTextModal;
