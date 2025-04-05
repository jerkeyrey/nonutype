import React, { useEffect, useState } from "react";

type TimerProps = {
  duration: number;
  isRunning: boolean;
  onEnd?: () => void;
};

const Timer = ({ duration, isRunning, onEnd }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          if (onEnd) onEnd();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, onEnd]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="text-2xl font-mono text-purple-400">
      ⏱️ {formatTime(timeLeft)}
    </div>
  );
};

export default Timer;
