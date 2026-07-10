import { useEffect, useState } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const timerId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [isRunning]);

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div className="timer">
      <p className="timer-count">{seconds} 秒経過</p>
      <button type="button" onClick={handleStop}>
        ストップ
      </button>
    </div>
  );
};


export default Timer;
