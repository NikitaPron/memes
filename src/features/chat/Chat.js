import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { ChatInput } from './ChatInput';

export function Chat() {
  const chat = useRef(null);
  const chatMessages = useSelector((state) => state.chat.messages);

  function scrollToDown() {
    chat.current.scrollTop = chat.current.scrollHeight;
  }

  return (
    <div className='chat'>
      <div ref={chat} className='chat__messages'>
        {chatMessages?.map((mes, i) => {
          return (
            <div key={i} className='chat__message'>
              <span className='chat__senderName'>{mes.userName}:</span>
              <span className='chat__messageText'>{mes.chatText}</span>
            </div>
          );
        })}
      </div>
      <ChatInput scrollToDown={scrollToDown} />
    </div>
  );
}
