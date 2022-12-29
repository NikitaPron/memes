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
import io from 'socket.io-client';

//-----------------------------------------------------------------------
export const COUNT_IN_ROOM = 'COUNT_IN_ROOM';
export const CHAT_UPDATE = 'CHAT_UPDATE';
export const SOMEONE_CHOOSE = 'SOMEONE_CHOOSE';
export const NEW_SITUATION = 'NEW_SITUATION';
export const NEW_MUSIC = 'NEW_MUSIC';
export const ONE_MINUTE_MUSIC_MISTAKE = 'ONE_MINUTE_MUSIC_MISTAKE';
export const CHANGE_MY_MEMES = 'CHANGE_MY_MEMES';
//-----------------------------------------------------------------------

export const ws = io('http://localhost:2500/');
ws.on(NEW_SITUATION, function (event) {
  const data = JSON.parse(event);
  store.dispatch(setSituation(data.situation));
  store.dispatch(setMyCards(data.cards));
  store.dispatch(clearPlayersCards());
  store.dispatch(setIsSended(false));
});

ws.on(COUNT_IN_ROOM, function (event) {
  const data = JSON.parse(event);
  console.log(event);
  store.dispatch(setCountInRoom(data.count));
});

ws.on(CHAT_UPDATE, function (event) {
  // userName && chatText
  const data = JSON.parse(event);
  store.dispatch(setMessages(data.chat));
});

ws.on(NEW_MUSIC, function (event) {
  const data = JSON.parse(event);
  // userName && musicURL && startSeconds
  store.dispatch(setMusicOffer(data.userName));
  store.dispatch(setMusicURL(data.musicURL));
  store.dispatch(setStartSeconds(data.startSeconds));
});

ws.on(ONE_MINUTE_MUSIC_MISTAKE, function (event) {
  const data = JSON.parse(event);
  console.log('Нужно послушать хотя бы 1 минуту');
});

ws.on(CHANGE_MY_MEMES, function (event) {
  const data = JSON.parse(event);
  //cards
  store.dispatch(setMyCards(data.cards));
});

ws.on(SOMEONE_CHOOSE, function (event) {
  const data = JSON.parse(event);
  //refImg && userName
  store.dispatch(
    pushPlayersCards({
      userName: data.userName,
      refImg: data.refImg,
    })
  );
});

// ws.onerror = errorWebSocket;
// ws.onopen = openWebSocket;
// ws.onclose = closeWebSocket;
// ws.onmessage = messageWebSocket;

// function errorWebSocket() {
//   store.dispatch(setConnectionStatus(false));
//   console.log('ОШИБКА');
// }

// function openWebSocket() {
//   console.log('CONNECTION');
// }

// function closeWebSocket() {
//   store.dispatch(setConnectionStatus(false));
//   console.log('CLOSED CONNECTION');
// }

// function messageWebSocket(event) {
//   const data = JSON.parse(event.data);
//   if (data.event === NEW_SITUATION) {
//     store.dispatch(setSituation(data.situation));
//     store.dispatch(setMyCards(data.cards));
//     store.dispatch(clearPlayersCards());
//     store.dispatch(setCountInRoom(data.count));
//     store.dispatch(setIsSended(false));
//   }

//   if (data.event === COUNT_IN_ROOM) {
//     store.dispatch(setCountInRoom(data.count));
//   }

//   if (data.event === CHAT_UPDATE) {
//     // userName && chatText
//     store.dispatch(setMessages(data.chat));
//   }

//   if (data.event === NEW_MUSIC) {
//     // userName && musicURL && startSeconds
//     store.dispatch(setMusicOffer(data.userName));
//     store.dispatch(setMusicURL(data.musicURL));
//     store.dispatch(setStartSeconds(data.startSeconds));
//   }

//   if (data.event === ONE_MINUTE_MUSIC_MISTAKE) {
//     // НИЧЕГО ---- ПРОСТО ОШИБКА
//   }

//   if (data.event === CHANGE_MY_MEMES) {
//     //cards
//     store.dispatch(setMyCards(data.cards));
//   }

//   if (data.event === SOMEONE_CHOOSE) {
//     //refImg && userName
//     store.dispatch(
//       pushPlayersCards({
//         userName: data.userName,
//         refImg: data.refImg,
//       })
//     );
//   }
// }
