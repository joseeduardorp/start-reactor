import React from 'react';
import CurrentPosition from './CurrentPosition.js';
import Display from './Display.js';
import Panel from './Panel.js';

export default function Game() {
  return (
    <div className="Game">
      <Panel>
        <CurrentPosition />
        <Display />
      </Panel>

      <Panel>
        <h2>Painel 2</h2>
      </Panel>
    </div>
  );
}