import React from 'react';
import ReactDom from 'react-dom';
import Chatbox from './chatbox'

ReactDom.render(
  <div className="container justify-content-center">
    <Chatbox />
  </div>,
  document.querySelector('#root')
)
