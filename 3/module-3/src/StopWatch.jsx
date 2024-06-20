import { useState, useEffect } from "react";


// eslint-disable-next-line no-unused-vars
export const StopWatch = ({searchString, handleSearch}) => {
    const [seconds, setSeconds] = useState("");
    // const hadleBtnClick  =  ()  =>  {
    //     ref.current.focus()
    // }
    useEffect(()  =>  {
        const timeId = setInterval(() => {setSeconds((seconds) => Number(seconds) + 1)}, 1000);

        return  ()   =>  {
            clearInterval(timeId)
        }
    }, [setSeconds])
    return (
        <div className="">
           Прошло {seconds}  секунд
        </div>
        )
}