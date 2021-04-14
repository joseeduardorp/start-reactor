import React from 'react';

export default function Display() {
  const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const displayButtons = lista.map((index) => <div key={index} className="DisplayButton" />);

  return (
    <div className="Display">
      {displayButtons}
    </div>
  )
}