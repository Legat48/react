import { useRef } from "react";


// eslint-disable-next-line no-unused-vars
export const FocusInput = ({searchString, handleSearch}) => {
    const ref = useRef()
    const hadleBtnClick  =  ()  =>  {
        ref.current.focus()
    }
    return (
        <div className="">
            <input type="text" value={searchString} ref={ref} onChange={handleSearch} />
            <button onClick={hadleBtnClick}>Фокус на инпуте</button>
        </div>
        )
}