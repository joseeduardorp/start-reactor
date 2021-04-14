import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game.js';
import './style.scss';

ReactDOM.render(
  <StrictMode>
    <Game />
  </StrictMode>,
  document.getElementById("root")
)