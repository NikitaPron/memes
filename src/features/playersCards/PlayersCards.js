import { useSelector } from "react-redux"

export function PlayersCards() {
    
    const playersCards = useSelector((state) => state.playersCards.array)
    
    return <div className="cards__choosen" id="cards__choosen">
        {playersCards.map((card, i) => {
            return <div className="card__choosen" key={i}>
                <div>{card.userName}</div>
                <img alt="mem" src={card.refImg}></img>
            </div>
        })}
    </div>
}