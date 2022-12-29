import { useState } from 'react';
import { ws } from '../../websocket/Websocket';

const TIMEOUT_SITUATION = 'TIMEOUT_SITUATION';
const CLEAR_CHAT = 'CLEAR_CHAT';
const CLEAR_TIMEOUT_MUSIC = 'CLEAR_TIMEOUT_MUSIC';
const NEXT_SITUATION = 'NEXT_SITUATION';

export function Admin() {
  const adminCode = localStorage.getItem('mem-admin-code');
  const [timing, setTiming] = useState(15);
  const [isShowed, setIsShowed] = useState(false);

  function changeTimingOnServer(e) {
    if (e.key === 'Enter') {
      ws.emit(
        'ADMIN_INFO',
        JSON.stringify({
          mode: 'admin',
          event: TIMEOUT_SITUATION,
          seconds: timing,
        })
      );
    }
  }

  function clearChat() {
    ws.emit(
      'ADMIN_INFO',
      JSON.stringify({
        mode: 'admin',
        event: CLEAR_CHAT,
      })
    );
  }

  function clearTimeoutMusic() {
    ws.emit(
      'ADMIN_INFO',
      JSON.stringify({
        mode: 'admin',
        event: CLEAR_TIMEOUT_MUSIC,
      })
    );
  }

  function nextSituation() {
    ws.emit(
      'ADMIN_INFO',
      JSON.stringify({
        mode: 'admin',
        event: NEXT_SITUATION,
      })
    );
  }

  if (adminCode === 'was built assuming it') {
    return isShowed ? (
      <div className='admin-div'>
        <button onClick={() => setIsShowed(() => !isShowed)}>Hide</button>
        <input
          onKeyDown={changeTimingOnServer}
          onChange={(e) => setTiming(() => e.target.value)}
          value={timing}
          type='number'
        />
        <button onClick={clearChat}>Очистить чат</button>
        <button onClick={clearTimeoutMusic}>Сбросить таймаут музыки</button>
        <button onClick={nextSituation}>Следующая ситуация</button>
      </div>
    ) : (
      <div className='admin-div'>
        <button onClick={() => setIsShowed(() => !isShowed)}>Open</button>
      </div>
    );
  }
}
