import React from 'react';

export default function Display() {
  const displayButtons = Array.from({ length: 9 }, (value, index) => {
    return (
      <div key={index} />
    );
  });

  return (
    <div className="Display">
      {displayButtons}
    </div>
  )
}