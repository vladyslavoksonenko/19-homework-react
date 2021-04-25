import React, { useState, useEffect } from 'react';



const Timer = (props) => {

  const [isStart, setStart] = useState(false);
  const [millisecond, setMillisecond] = useState(props.timeMilliseconds);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [time, setTime] = useState(0);
  const [width, setWidth] = useState(100)

  let textButton = !isStart ? "Start" : "Pause";


  useEffect(() => {
    if (isStart) {
      setTimeout(() => {
        setTime(minute + ":" + second)
        setMillisecond(millisecond - props.step);
        setSecond(Math.trunc((millisecond / 1000) % 60));
        setMinute(Math.trunc((millisecond / 1000) / 60));
        setWidth(millisecond * 100 / props.timeMilliseconds)
        
        if (millisecond < 1000) {
          props.onTimeEnd();
          setMillisecond(props.timeMilliseconds);
          setStart(false);
        }
      }, props.step)
    }
  }, [isStart, millisecond, props.onTimeStart, minute, second])

  useEffect(() => {
    if (props.autostart) {
      setStart(!isStart);
    } 
  }, [])

  useEffect(() => {
    if (isStart) {
      props.onTimeStart();
    }
  }, [isStart])
  

  return (
    <div className="timer">
      <div className="timer">
        <h2>Timer: {minute + ":" + second}</h2>
        <button className="button start" onClick={() => setStart(!isStart)}>{textButton}</button>
        <div className="line" style={{width: + width + "%"}}></div>
       </div>
    </div>
  )
}

export default Timer;
