import { useEffect, useState } from "react";

export default function Timer() {
  const [stopwatch, setStopwatch] = useState(55);

  useEffect(() => {
    const interval = setInterval(() => {
      setStopwatch((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const minutes = Math.floor(stopwatch / 60);
  const seconds = (stopwatch % 60).toString().padStart(2, "0");

  return (
    <>
      <h2 className="text-4xl font-black">Time</h2>
      <p className="text-4xl font-black">
        {minutes}:{seconds}
      </p>
    </>
  );
}
