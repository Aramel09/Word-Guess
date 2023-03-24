import PropTypes from "prop-types";

import { useEffect } from "react";

export default function Timer({
  timerRunning,
  setTimerRunning,
  arrayForComparing,
  wordSeparator,
  stopwatch,
  setStopwatch,
}) {
  useEffect(() => {
    if (
      timerRunning &&
      !(arrayForComparing.toString() === wordSeparator.toString())
    ) {
      const interval = setInterval(() => {
        setStopwatch((prev) => prev + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [arrayForComparing, wordSeparator]);

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

Timer.propTypes = {
  timerRunning: PropTypes.bool.isRequired,
  setTimerRunning: PropTypes.func.isRequired,
  arrayForComparing: PropTypes.array.isRequired,
  wordSeparator: PropTypes.array.isRequired,
  stopwatch: PropTypes.number.isRequired,
  setStopwatch: PropTypes.func.isRequired,
};
