import React, { useState, useEffect } from 'react';

export default function Chatting(props) {
  const [chatMessage, setChatMessage] = useState('');
  const writeMessage = event => {
    setChatMessage(event.target.value);
  }

  const submitMessage = event => {
    event.preventDefault();
    event.target.reset();
    const renderedMessage = document.createElement('div');
    const currentTime = new Date();
    const readableTime = currentTime.toLocaleTimeString();
    const messageTimeStamp = document.createElement('p');
    messageTimeStamp.textContent = readableTime;
    renderedMessage.appendChild(messageTimeStamp);
    messageTimeStamp.className = 'margin-0';
    const newMessage = document.createElement('p');
    newMessage.textContent = chatMessage;
    newMessage.className = 'margin-0';
    const chatRoom = document.querySelector('#board');
    renderedMessage.appendChild(newMessage);
    renderedMessage.className = 'margin-10-10';
    chatRoom.appendChild(renderedMessage);
  }

  return (
    <div>
      <h3 className="flex-basis-100 margin-0 text-align-center">
        Let's Chat
      </h3>
      <form onSubmit={submitMessage}>
        <input onChange={writeMessage} type="text"></input>
        <button type="submit">Enter</button>
      </form>
      <div id="board" />
    </div>
  )
}
