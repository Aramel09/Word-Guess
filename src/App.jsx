import { useState } from "react";
import Display from "./components/Display";
import WordGuess from "./components/WordGuess";

function App() {
  const [show, setShow] = useState(true);

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-y-8">
      {show ? <Display setShow={setShow} /> : <WordGuess />}
    </main>
  );
}

export default App;
