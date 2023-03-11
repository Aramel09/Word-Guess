import { useState } from "react";

const WORD = "bird";
const wordSeparator = WORD.split("");
console.log(wordSeparator);

function App() {
  const [wordChange, setWordChange] = useState("_");
  const [wordChangeSecondLetter, setWordChangeSecondLetter] = useState("_");
  const [wordChangeThirdLetter, setWordChangeThirdLetter] = useState("_");
  const [wordChangeFourthLetter, setWordChangeFourthLetter] = useState("_");

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-y-8">
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
            if (event.key === wordSeparator[0]) {
              setWordChange(wordSeparator[0]);
            } else if (event.key === wordSeparator[1]) {
              setWordChangeSecondLetter(wordSeparator[1]);
            } else if (event.key === wordSeparator[2]) {
              setWordChangeThirdLetter(wordSeparator[2]);
            } else if (event.key === wordSeparator[3]) {
              setWordChangeFourthLetter(wordSeparator[3]);
            }

            // console.log(event.key);
          }}
        />
      </div>
    </main>
  );
}

export default App;
