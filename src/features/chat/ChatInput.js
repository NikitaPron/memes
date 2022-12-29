import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CHAT_UPDATE, ws } from '../../websocket/Websocket';

export function ChatInput({ scrollToDown }) {
  const [value, setValue] = useState('');
  const name = useSelector((state) => state.name.value);

  useEffect(() => {
    scrollToDown();
  }, [scrollToDown]);

  function enterKeyHandler(e) {
    if (e.key === 'Enter' && value) {
      ws.emit(
        CHAT_UPDATE,
        JSON.stringify({
          userName: name,
          chatText: value,
        })
      );
      setValue('');
    }
  }

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={enterKeyHandler}
      id='chat__input'
      className='chat__input'
      type='text'
    />
  );
}
