import "./QueryInput.css";
import { FaArrowUp } from "react-icons/fa";
import { useChatContext } from "../../context/ChatContext";
import TypingLoader from "../TypingLoader/TypingLoader";
import { useEffect, useState } from "react";
import PrompotBot from "../../helpers/chat";

const QueryInput = () => {
  const {
    promptMessage,
    setPromptMessage,
    isInputDisabled,
    setIsInputDisabled,
    isTyping,
    optionsSelected,
    aiResponse,
    setAiResponse,
    userId,
    setRestartRequired,
  } = useChatContext();

  const [placeholderText, setPlaceholderText] = useState("");
  const [isStreamCompleted, setIsStreamCompleted] = useState(false);

  useEffect(() => {
    console.log({ userId });
  }, [userId]);

  useEffect(() => {
    if (!isStreamCompleted && !isInputDisabled) {
      setIsInputDisabled(true);
    }
    if (isStreamCompleted && aiResponse) {
      isInputDisabled && setIsInputDisabled(false);
    }
  }, [isStreamCompleted, aiResponse]);

  useEffect(() => {
    if (isTyping) {
      setPlaceholderText("Generating a response...");
    } else {
      setPlaceholderText("Select one of the above options.");
    }

    if (!isInputDisabled || (optionsSelected && !isTyping)) {
      setPlaceholderText("Message Prompot Bot...");
    }
    if (optionsSelected) {
      setAiResponse("");
      let prompt = "";
      if (optionsSelected?.category && optionsSelected?.subCategory) {
        prompt += `You offer services catering to: ${optionsSelected.category}. I'm interested in ${optionsSelected.subCategory}. Share the advantages of your services with me and inquire about my project ideas.`;
      }
      if (optionsSelected?.category && !optionsSelected?.subCategory) {
        prompt += "Hey, prompot 👋.";
      }
      beginChatProcess(prompt);
    }
  }, [isTyping, optionsSelected]);

  async function beginChatProcess(prompt = promptMessage) {
    setIsStreamCompleted(false);
    const response = await PrompotBot.initiateChat(
      userId,
      prompt,
      setAiResponse
    );
    if (response?.isStreamed) {
      setIsStreamCompleted(true);
    } else {
      setRestartRequired(true);
    }
  }

  const handleSendPromptButton = () => {
    if (!promptMessage && !promptMessage.trim()) return;
    setAiResponse("");
    setPromptMessage("");
    beginChatProcess();
  };

  return (
    <div className="prompot__query-cont">
      <div className="prompot__query-loader">
        {isTyping && <TypingLoader />}
      </div>
      <div className="prompot__query-input-cont">
        <input
          className="prompot__query-input"
          type="text"
          autoFocus={!!optionsSelected}
          value={promptMessage}
          disabled={isInputDisabled}
          onChange={(e) => setPromptMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) handleSendPromptButton();
          }}
          placeholder={placeholderText}
        />
        <div
          className={`prompot__query-button 
          ${promptMessage ? "prompot__query-button--white " : ""}
          ${optionsSelected ? "" : "prompot__query-button--disabled"}
          `}
          onClick={handleSendPromptButton}
        >
          <FaArrowUp />
        </div>
      </div>
    </div>
  );
};

export default QueryInput;
