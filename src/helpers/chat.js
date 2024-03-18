const initiateChat = async (userId, userPrompt, setState, ) => {
  try {
    const streamResponse = await fetch("http://localhost:1112/api/chat", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userPrompt, userId }),
    });

    if (!streamResponse.ok || !streamResponse.body) {
      throw streamResponse.statusText;
    }

    // Here we start prepping for the streaming response
    const reader = streamResponse.body.getReader();
    const decoder = new TextDecoder();
    const loopRunner = true;

    while (loopRunner) {
      // Here we start reading the stream, until its done.
      const { value, done } = await reader.read();
      if (done) {
        return { isStreamed: true };
      }
      const decodedChunk = decoder.decode(value, { stream: true });
      setState((answer) => answer + decodedChunk); // update state with new chunk
    }
  } catch (err) {
    console.error(err);
    debugger;
    return { isStreamed: false };
  }
};

const PrompotBot = {
  initiateChat,
};

export default PrompotBot;
