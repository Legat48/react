import { useState, useEffect } from "react";


// eslint-disable-next-line no-unused-vars
export const StopWatch = ({ searchString, handleSearch }) => {
  const seconds  =  useStopWatch()
  return (
    <div className="">
      Прошло {seconds}  секунд
    </div>
  )
}

function useStopWatch() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timeId = setInterval(() => { setSeconds((seconds) => Number(seconds) + 1) }, 1000);

    return () => {
      clearInterval(timeId)
    }
  }, [setSeconds])
  return seconds
}