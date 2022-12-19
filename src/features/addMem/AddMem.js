import { useState } from "react"
import { useDispatch } from "react-redux";
import { pushToMyCards } from "../myCards/myCardsSlice";

export function AddMem() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    function enterKeyHandler(e) {
        if(e.key === 'Enter' && value) {
            dispatch(pushToMyCards(value))
            setValue('');
        }
    }

    return <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={enterKeyHandler} id="inputAddMem" type="text" placeholder="Вставьте ссылку на мем"></input>
    </div>
}