import React, { useState, useEffect } from 'react';
import '../components/Stopwatch.css';
import Timer from './Timer';
import ControlButtons from './ControlButtons';

function StopWatch(props) {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  //   useEffect(() => {
  //     let interval = null;

  //     if (isActive && isPaused === false) {
  //       interval = setInterval(() => {
  //         setTime((time) => time + 10);
  //       }, 10);
  //     } else {
  //       clearInterval(interval);
  //     }
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, [isActive, isPaused]);

  useEffect(() => {
    let interval = null;

    if (props.site?.includes('youtube.com')) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [props.site]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div>
      <Timer time={time} />
      {/* <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      /> */}
    </div>
  );
}

export default StopWatch;
