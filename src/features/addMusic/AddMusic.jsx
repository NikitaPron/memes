import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NEW_MUSIC, ws } from '../../websocket/Websocket';

export function AddMusic() {
  const [value, setValue] = useState('');
  const name = useSelector((state) => state.name.value);
  const nameMusic = useSelector((state) => state.music.userName);
  const isPlaying = useSelector((state) => state.music.isPlayingNow);

  function enterKeyHandler(e) {
    if (e.key === 'Enter' && value) {
      ws.emit(
        NEW_MUSIC,
        JSON.stringify({
          musicURL: value,
          userName: name,
        })
      );
      setValue('');
    }
  }

  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={enterKeyHandler}
        id='inputMusic'
        type='text'
        placeholder='Заказать музыку (ссылка из YouTube)'
      />
      {nameMusic && isPlaying && (
        <div>
          Музыку заказал <b>{nameMusic}</b>
        </div>
      )}
    </>
  );
}
