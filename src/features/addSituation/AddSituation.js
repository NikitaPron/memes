import { useState } from "react"
import { ws } from "../../websocket/Websocket";

export function AddSituation() {
    const [value, setValue] = useState('');


    function enterKeyHandler(e) {
        if(e.key === 'Enter') {
            ws.send(JSON.stringify({situation: value}))
            setValue('');
        }
    }

    return <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={enterKeyHandler} id="inputSituation" type="text" placeholder="Предложить ситуацию" />
    </div>
}
