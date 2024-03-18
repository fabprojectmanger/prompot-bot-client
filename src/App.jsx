// App.js
import React from "react";
import { ChatInterface } from "./components";
import { ChatContextProvider } from "./context/ChatContext";

function App() {
  return (
    <div>
      <ChatContextProvider>
        <ChatInterface />
      </ChatContextProvider>
    </div>
  );
}

export default App;
