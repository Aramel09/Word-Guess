import { useState } from "react";
import Timer from "./Timer";

const WORD = "bird";
const wordSeparator = WORD.split("");

export default function WordGuess() {
  const [wordChange, setWordChange] = useState("_");
  const [wordChangeSecondLetter, setWordChangeSecondLetter] = useState("_");
  const [wordChangeThirdLetter, setWordChangeThirdLetter] = useState("_");
  const [wordChangeFourthLetter, setWordChangeFourthLetter] = useState("_");
  const [timerRunning, setTimerRunning] = useState(true);
  const [stopwatch, setStopwatch] = useState(0);

  const arrayForComparing = [
    wordChange,
    wordChangeSecondLetter,
    wordChangeThirdLetter,
    wordChangeFourthLetter,
  ];

  return (
    <>
      <Timer
        timerRunning={timerRunning}
        setTimerRunning={setTimerRunning}
        arrayForComparing={arrayForComparing}
        wordSeparator={wordSeparator}
        stopwatch={stopwatch}
        setStopwatch={setStopwatch}
      />
      <h1 className="text-4xl font-black">Guess the Word</h1>

      <p className="text-8xl font-extrabold uppercase tracking-widest">
        {wordChange}
        {wordChangeSecondLetter}
        {wordChangeThirdLetter}
        {wordChangeFourthLetter}
      </p>

      <div className="flex gap-x-2">
        <label htmlFor="guess">Guess a letter:</label>
        <input
          type="text"
          className="w-8 border-2 border-gray-300"
          maxLength={0}
          id="guess"
          onKeyDown={() => {
            console.log(arrayForComparing, "Array de prubea");
            console.log(wordSeparator, "Palabra original");
            console.log(
              !(arrayForComparing.toString() === wordSeparator.toString())
            );
            if (event.key === wordSeparator[0]) {
              setWordChange(wordSeparator[0]);
            } else if (event.key === wordSeparator[1]) {
              setWordChangeSecondLetter(wordSeparator[1]);
            } else if (event.key === wordSeparator[2]) {
              setWordChangeThirdLetter(wordSeparator[2]);
            } else if (event.key === wordSeparator[3]) {
              setWordChangeFourthLetter(wordSeparator[3]);
            } else {
              setStopwatch((prev) => prev + 10);
            }
          }}
        />
      </div>
    </>
  );
}
