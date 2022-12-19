import { useSelector } from "react-redux"

export function Situation() {
    
    const situation = useSelector((state) => state.situation.value)

    return <div className="situation" id="situation">{situation}</div>
}