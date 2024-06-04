import React, { useState } from "react";

const LetterInput = ({ onGuess, arrLetters }) => {
  const [inputValue, setInputValue] = useState("");
  //функция для обработки ввода
  const handleSubmit = (event) => {
    event.preventDefault();
    const letter = inputValue.trim().toLowerCase();
    if (letter && !arrLetters.includes(letter)) {
      onGuess(letter);
    }
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        maxLength="1"
        className="form-control"
        autoFocus
        required
      />
      <button type="submit" className="btn">
        Check
      </button>
    </form>
  );
};

export default LetterInput;
