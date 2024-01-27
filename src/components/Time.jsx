import React, { useState, useEffect } from "react";

const Time = () => {
  const initialTime = 30 * 24 * 60 * 60; // 30 days in seconds
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timerInterval); // Stop the interval when the timer reaches 0
          return 0;
        }
      });
    }, 1000); // Update every 1000ms (1 second)

    // Cleanup the interval on component unmount
    return () => clearInterval(timerInterval);
  }, []); // Empty dependency array ensures that the effect runs once on mount

  // Convert remainingTime to days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (24 * 60 * 60));
  const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
  const seconds = remainingTime % 60;

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>
        {days} days, {hours} hrs, {minutes} mins, {seconds} sec remaining
      </p>
    </div>
  );
};

export default Time;
