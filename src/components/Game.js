import React, { useState, useEffect } from 'react';
import CurrentPosition from './CurrentPosition.js';
import Panel from './Panel.js';
import Modal from './Modal.js';
import Display from './Display.js';
import Buttons from './Buttons.js';

export default function Game() {
  const [start, setStart] = useState(true); // mudar para false
  const [randomNumberList, setRandomNumberList] = useState([]);

  function randomizeNumberList() {
    let randomNumberList = [];

    for (let i = 0; i < 5; i++) {
      randomNumberList.push(Math.floor(Math.random() * 9));
    }

    return setRandomNumberList(randomNumberList);
  }

  function handleKeyPress(event) {
    return event.key === "Enter" && setStart(true);
  }

  useEffect(() => {
    window.document.body.addEventListener('keypress', handleKeyPress);

    randomizeNumberList();
  }, []);

  console.log(randomNumberList);
  
  return (
    <div className="Game">
      {!start && <Modal />}

      <Panel>
        <CurrentPosition />
        <Display />
      </Panel>

      <Panel>
        <CurrentPosition />
        <Buttons />
      </Panel>
    </div>
  );
}
