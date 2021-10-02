import React from 'react';
import ReactDom from 'react-dom';
import Chatting from 'chatter';

ReactDom.render(
  <div>
    <Chatting />
    <h1>hi</h1>
  </div>,
  document.querySelector('#root');
)
