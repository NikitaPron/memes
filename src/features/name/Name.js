import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setName } from "./nameSlice"

export function Name() {
    const [value, setValue] = useState(useSelector((state) => state.name.value))
    const dispatch = useDispatch()

    function blurHandler() {
        const name = value === '' ? 'Гость' : value 
        dispatch(setName(name))
        localStorage.setItem('mem-username', name)
    }

    return <div>
        <input onBlur={blurHandler} onChange={(e) => setValue(e.target.value)} id="inputName" type="text" placeholder="Введите ваше имя" value={value} />
    </div>
}