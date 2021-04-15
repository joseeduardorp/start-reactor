import React, { useState, useEffect } from 'react';
import CurrentPosition from './CurrentPosition.js';
import Panel from './Panel.js';
import Modal from './Modal.js';
import Display from './Display.js';
import Buttons from './Buttons.js';

export default function Game() {
  const [start, setStart] = useState(true);

  const handleKeyPress = (event) => {
    return event.key === "Enter" && setStart(false);
  }

  useEffect(() => {
    window.document.body.addEventListener('keypress', handleKeyPress);
  }, []);

  return (
    <div className="Game">
      {start && <Modal />}

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
