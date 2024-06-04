import React from "react";

const WordDisplay = ({ word, arrLetters }) => {
  return (
    <div>
      {word.split("").map((letter, index) => (
        <span key={index} className="letter">
          {arrLetters.includes(letter) ? letter : " _ "}
        </span>
      ))}
    </div>
  );
};
export default WordDisplay;
