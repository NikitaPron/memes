import { useSelector } from "react-redux"


export function CountInRoom() {
    
    const count = useSelector((state) => state.countInRoom.value)

    return <div className="count" id="count">Количество в комнате: {count}</div>

}