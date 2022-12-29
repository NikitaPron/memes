import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_MY_MEMES, SOMEONE_CHOOSE, ws } from '../../websocket/Websocket';
import { setIsSended } from './myCardsSlice';

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  );

export function MyCards() {
  const name = useSelector((state) => state.name.value);
  const isSended = useSelector((state) => state.myCards.isSended);
  const myCards = useSelector((state) => state.myCards.array);

  const dispatch = useDispatch();

  function clickHandler(e) {
    if (!isSended) {
      ws.emit(
        SOMEONE_CHOOSE,
        JSON.stringify({
          userName: name,
          refImg: e.target.src,
        })
      );
      dispatch(setIsSended(true));
    }
  }

  function buttonChangeMemesHandler() {
    ws.emit(CHANGE_MY_MEMES, JSON.stringify({}));
  }

  return (
    !isSended && (
      <div className='cards' id='cards'>
        {myCards.map((card, index) => {
          return (
            <img key={index} alt='mem' src={card} onClick={clickHandler}></img>
          );
        })}
        <button onClick={buttonChangeMemesHandler}>Поменять</button>
      </div>
    )
  );
}
