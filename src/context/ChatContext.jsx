import { createContext, useContext, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [promptMessage, setPromptMessage] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [optionsSelected, setOptionsSelected] = useState();
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const [restartRequired, setRestartRequired] = useState(false);
  const userId = useRef(uuid());

  const contextValues = {
    promptMessage,
    setPromptMessage,
    aiResponse,
    setAiResponse,
    isInputDisabled,
    setIsInputDisabled,
    optionsSelected,
    setOptionsSelected,
    isTyping,
    setIsTyping,
    userId: userId.current,
    restartRequired,
    setRestartRequired,
  };
  return (
    <ChatContext.Provider value={contextValues}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  return useContext(ChatContext);
};
