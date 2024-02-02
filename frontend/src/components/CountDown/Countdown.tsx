import React, { useEffect, useState } from 'react';

interface CounterProps {
  duration: number; // Duration of the countdown in seconds
}

const Counter: React.FC<CounterProps> = ({ duration }) => {
  const [seconds, setSeconds] = useState<number>(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        const newSeconds = prevSeconds - 1;

        if (newSeconds === 0) {
          // Reset the countdown when it reaches 0
          return duration;
        }

        return newSeconds;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [duration]);

  // Calculate the progress angle
  const progressAngle = ((duration - seconds) / duration) * 360;

  return (
    <div className="font-Oswald  flex h-[30%] w-[60%] justify-center items-center h-full">
      <svg className="font-Oswald  w-[100%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle
        fontFamily='Oswald'
          cx="50%"
          cy="50%"
          r="30"
          stroke="#5DC7C2"
          strokeWidth="6"
          fill="transparent"
          strokeDasharray={`calc(251.327 * (${progressAngle / 360})), 251.327`}
          transform="rotate(90 50 50)" // Change to rotate clockwise
        />
        <text fontSize="25px" x="50%" y="50%" fill="#5DC7C2" dominantBaseline="middle" textAnchor="middle">
          {seconds}
        </text>
      </svg>
    </div>
  );
};

export default Counter;
