import { useRef } from "react";
import { useSelector } from "react-redux"
import { ChatInput } from "./ChatInput"

export function Chat() {
    const chat = useRef(null)
    const chatMessages = useSelector((state) => state.chat.messages)

    function scrollToDown() {
        chat.current.scrollTop = chat.current.scrollHeight;
    }


    return <div className="chat">
                <div ref={chat} className="chat__messages">
                    {chatMessages?.map((mes, i) => {
                        return <div key={i} className="chat__message">
                            <div className="chat__senderName">{mes.userName}:</div>
                            <div className="chat__messageText">{mes.chatText}</div>
                        </div>
                    })}
                </div>
                <ChatInput scrollToDown={scrollToDown} />
            </div>

}