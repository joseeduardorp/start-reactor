import React from 'react';

export default function CurrentPosition() {
  const lista = [0, 1, 2, 3, 4];
  const balls = lista.map((index) => <div key={index} className="Ball" />);

  return (
    <div className="CurrentPosition">
      {balls}
    </div>
  );
}