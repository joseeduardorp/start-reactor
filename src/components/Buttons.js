import React from 'react';

export default function Buttons() {
  const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const buttons = lista.map((index) => <button key={index} className="button" onClick={() => alert(`botão nº${index}`)} />);

  return (
    <div className="Buttons">
      {buttons}
    </div>
  );
}