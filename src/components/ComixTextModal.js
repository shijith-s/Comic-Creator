import React, { useEffect, useState } from "react";
import "../styles/comicTextModal.css";
import CloseIcon from "@mui/icons-material/Close";

function ComixTextModal({ currPageId, closeModal, currText, generate }) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(currText);
  }, [currText]);

  const handleChange = (e) => {
    let txt = e.target.value;
    setText(txt);
  };

  const submitText = () => {
    generate(currPageId, text);
    closeModal();
  };

  return (
    <div className="comic__text__modal">
      <div className="comic__text__modal_close_btn" onClick={closeModal}>
        <CloseIcon />
      </div>
      <h3>Let your creativity Flow</h3>
      <textarea
        className="comic__text__modal__textarea"
        value={text}
        onChange={handleChange}
        
      />
      <div className="comic__text__modal__btn">
        <button onClick={submitText}>Generate</button>
      </div>
    </div>
  );
}

export default ComixTextModal;
