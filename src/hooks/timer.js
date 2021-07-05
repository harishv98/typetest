import { useEffect, useState, useCallback, useRef } from "react";

export default function useTimer(seconds = 0) {
  const [time, setTime] = useState(seconds);
  const [isRunning, setIsRunning] = useState(false);
  let intervalFunc = useRef(null);

  let start = useCallback(() => {
    setIsRunning(true);
    
    intervalFunc.current = setInterval(() => {
      setTime((v) => v - 1);
    }, 1000);
  },[setTime, setIsRunning])

  let stop = useCallback(() => {
    setIsRunning(false);
    clearInterval(intervalFunc.current);
    setTime(seconds);
  }, [setIsRunning, setTime, seconds]);

  useEffect(() => {
    if(time === 0) {
      stop();
    }
  });

  return {
    start,
    stop,
    isRunning,
    seconds: time,
    setTime
  };
}