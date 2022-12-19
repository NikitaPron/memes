import { store } from '../app/store';
import { setMessages } from '../features/chat/chatSlice';
import { setConnectionStatus } from '../features/CLOSED_CONNECTION/ccSlice';
import { setCountInRoom } from '../features/countInRoom.js/countInRoomSlice';
import {
  setMusicOffer,
  setMusicURL,
  setStartSeconds,
} from '../features/music/musicSlice';
import { setIsSended, setMyCards } from '../features/myCards/myCardsSlice';
import {
  clearPlayersCards,
  pushPlayersCards,
} from '../features/playersCards/playersCardsSlice';
import { setSituation } from '../features/situation/situationSlice';

//-----------------------------------------------------------------------
const COUNT_IN_ROOM = 'COUNT_IN_ROOM';
const CHAT_UPDATE = 'CHAT_UPDATE';
const SOMEONE_CHOOSE = 'SOMEONE_CHOOSE';
const NEW_SITUATION = 'NEW_SITUATION';
const NEW_MUSIC = 'NEW_MUSIC';
const ONE_MINUTE_MUSIC_MISTAKE = 'ONE_MINUTE_MUSIC_MISTAKE';
const CHANGE_MY_MEMES = 'CHANGE_MY_MEMES';
//-----------------------------------------------------------------------

// export const ws = new WebSocket('ws://localhost:5000')
export const ws = new WebSocket('wss://8jmpzu.sse.codesandbox.io/');
ws.onerror = errorWebSocket;
ws.onopen = openWebSocket;
ws.onclose = closeWebSocket;
ws.onmessage = messageWebSocket;

function errorWebSocket() {
  store.dispatch(setConnectionStatus(false));
  console.log('ОШИБКА');
}

function openWebSocket() {
  console.log('CONNECTION');
}

function closeWebSocket() {
  store.dispatch(setConnectionStatus(false));
  console.log('CLOSED CONNECTION');
}

function messageWebSocket(event) {
  const data = JSON.parse(event.data);
  if (data.event === NEW_SITUATION) {
    store.dispatch(setSituation(data.situation));
    store.dispatch(setMyCards(data.cards));
    store.dispatch(clearPlayersCards());
    store.dispatch(setCountInRoom(data.count));
    store.dispatch(setIsSended(false));
  }

  if (data.event === COUNT_IN_ROOM) {
    store.dispatch(setCountInRoom(data.count));
  }

  if (data.event === CHAT_UPDATE) {
    // userName && chatText
    store.dispatch(setMessages(data.chat));
  }

  if (data.event === NEW_MUSIC) {
    // userName && musicURL && startSeconds
    store.dispatch(setMusicOffer(data.userName));
    store.dispatch(setMusicURL(data.musicURL));
    store.dispatch(setStartSeconds(data.startSeconds));
  }

  if (data.event === ONE_MINUTE_MUSIC_MISTAKE) {
    // НИЧЕГО ---- ПРОСТО ОШИБКА
  }

  if (data.event === CHANGE_MY_MEMES) {
    //cards
    store.dispatch(setMyCards(data.cards));
  }

  if (data.event === SOMEONE_CHOOSE) {
    //refImg && userName
    store.dispatch(
      pushPlayersCards({
        userName: data.userName,
        refImg: data.refImg,
      })
    );
  }
}
