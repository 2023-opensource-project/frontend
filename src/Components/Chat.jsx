import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { MainContainer, SubContainer, ChatInput, ChatButton } from "./Chat.style.jsx";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const endOfChatRef = useRef(null);

  const sendMessage = async () => {
    if (text.length === 0) return;
    setMessages((prevMessages) => [...prevMessages, { text, user: "you" }]);
    setText("");
    const { data } = await axios.post("/api/chat", { message: text });
    setMessages((prevMessages) => [...prevMessages, { text: data.message, user: "bot" }]);
  };

  useEffect(() => {
    endOfChatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <MainContainer>
      {messages.map((message, index) => (
        <p key={index}>
          <strong>{message.user}:</strong> {message.text}
        </p>
      ))}
      <div ref={endOfChatRef} />
      <SubContainer>
        <ChatInput value={text} placeholder={"GPT에게 질문하세요"} onChange={(e) => setText(e.target.value)} />
        <ChatButton onClick={sendMessage}>Send</ChatButton>
      </SubContainer>
    </MainContainer>
  );
}

export default Chat;
