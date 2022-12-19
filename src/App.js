import React from 'react';
import './App.css';
import { AddMem } from './features/addMem/AddMem';
import { AddMusic } from './features/addMusic/AddMusic';
import { AddSituation } from './features/addSituation/AddSituation';
import { Admin } from './features/ADMIN/Admin';
import { Chat } from './features/chat/Chat';
import { ClosedConnection } from './features/CLOSED_CONNECTION/ClosedConnection';
import { CountInRoom } from './features/countInRoom.js/CountInRoom';
import { Music } from './features/music/Music';
import { MyCards } from './features/myCards/MyCards';
import { Name } from './features/name/Name';
import { PlayersCards } from './features/playersCards/PlayersCards';
import { Situation } from './features/situation/Situation';
import { ws } from './websocket/Websocket';

function App() {
  return (
    <div className='main'>
      <ClosedConnection />
      <Admin />
      <Music />
      <div className='main__header'>
        <header>
          <CountInRoom />
          <Name />
          <AddMem />
          <AddSituation />
          <AddMusic />
        </header>
      </div>
      <div className='main__raw'>
        <Chat />
        <div className='situation__container'>
          <Situation />
          <PlayersCards />
        </div>
      </div>
      <div className='main__footer'>
        <MyCards />
      </div>
    </div>
  );
}

export default App;
