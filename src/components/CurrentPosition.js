import React from 'react';

export default function CurrentPosition() {
  const balls = Array.from({ length: 5 }, (value, index) => {
    return <div key={index} />
  })

  return (
    <div className="CurrentPosition">
      {balls}
    </div>
  );
}