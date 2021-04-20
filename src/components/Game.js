import React, { useState, useEffect } from 'react';
import CurrentPosition from './CurrentPosition.js';
import Panel from './Panel.js';
import Modal from './Modal.js';
import Display from './Display.js';
import Buttons from './Buttons.js';

export default function Game() {
  const [start, setStart] = useState(false);
  const [randomList, setRandomList] = useState([]);
  const [currentPosition, setCurrentPosition] = useState([4]);

  // ==================================================================================
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // ==================================================================================
  const randomizeNumber = () => {
    let randomNumbersList = [];

    for (let i = 0; i < 5; i++) {
      let randomNumber = Math.floor(Math.random() * 9);
      randomNumbersList.push(randomNumber);
    }

    return randomNumbersList;
  }

  const handleKeyPress = (event) => {
    return event.key === "Enter" && setStart(true);
  }

  const verify = (index, currentPosition) => {
    for (let i = 0; i < currentPosition.length; i++) {
      if (index === currentPosition[i]) return true;
    }
  }

  useEffect(() => {
    window.document.body.addEventListener('keypress', handleKeyPress);

    setRandomList(randomizeNumber());
  }, []);

  // ==================================================================================
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // ==================================================================================

  console.log("teste: " + randomList);
  console.log("teste: " + currentPosition);

  const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const displayButtons = lista.map((index) => {
    let isOn = "DisplayButton";

    let teste = verify(index, currentPosition);
    
    if (start && teste) isOn += " On";

    return (
      <div key={index} className={isOn} />
    )
  });

  return (
    <div className="Game">
      {!start && <Modal />}

      <Panel>
        <CurrentPosition />
        <Display isStart={start} randomList={randomList} displayButtons={displayButtons} />
      </Panel>

      <Panel>
        <CurrentPosition />
        <Buttons />
      </Panel>
    </div>
  );
}
