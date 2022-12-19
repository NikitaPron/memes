import { configureStore } from '@reduxjs/toolkit';
import chatSlice from '../features/chat/chatSlice';
import connectionStatusSlice from '../features/CLOSED_CONNECTION/ccSlice';
import countInRoomSlice from '../features/countInRoom.js/countInRoomSlice';
import musicSlice from '../features/music/musicSlice';
import myCardsSlice from '../features/myCards/myCardsSlice';
import nameSlice from '../features/name/nameSlice';
import playersCardsSlice from '../features/playersCards/playersCardsSlice';
import situationSlice from '../features/situation/situationSlice';

export const store = configureStore({
  reducer: {
    situation: situationSlice,
    music: musicSlice,
    name: nameSlice,
    chat: chatSlice,
    playersCards: playersCardsSlice,
    myCards: myCardsSlice,
    countInRoom: countInRoomSlice,
    statusConnection: connectionStatusSlice,
  },
});
