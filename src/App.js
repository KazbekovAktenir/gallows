import React, { useState } from "react";
import WordDisplay from "./components/WordDisplay";
import LetterInput from "./components/LetterInput";

const App = () => {
  const [word, setWord] = useState("react"); //слово которое нужно угадать
  //arrLetters - массив с буквами, которые игрок уже угадал
  const [arrLetters, setArrLetters] = useState([]);
  //wrong - количество неправильных попыток
  const [wrong, setWrong] = useState(0);
  const maxAttempts = 6; //максимальное количество попыток

  //функция для обработки угадываний
  const handleGuess = (letter) => {
    if (!arrLetters.includes(letter)) {
      setArrLetters([...arrLetters, letter]);
      if (!word.includes(letter)) {
        setWrong(wrong + 1);
      }
    }
  };

  const isGameOver = wrong >= maxAttempts;
  const isGameWon = word
    .split("")
    .every((letter) => arrLetters.includes(letter));

  return (
    <div className="App">
      <h1>Игра виселица</h1>
      <WordDisplay word={word} arrLetters={arrLetters} />
      {isGameOver ? (
        <h2>Игра закончена! Слово было: {word}</h2>
      ) : isGameWon ? (
        <h2>Поздравляем! Вы угадали слово: {word}</h2>
      ) : (
        <LetterInput onGuess={handleGuess} arrLetters={arrLetters} />
      )}
      <p>
        Неправильные попытки: {wrong} из {maxAttempts}
      </p>
    </div>
  );
};

export default App;
