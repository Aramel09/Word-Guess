import { useEffect, useState } from "react";

export default function Timer() {
  const [stopwatch, setStopwatch] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStopwatch((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h2 className="text-4xl font-black">Time</h2>
      <p className="text-4xl font-black">{stopwatch}</p>
    </>
  );
}
