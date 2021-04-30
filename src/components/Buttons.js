import React from 'react';

export default function Buttons() {
  const buttons = Array.from({ length: 9 }, (value, index) => {
    return (
      <button 
        key={index}
        onClick={() => alert("botão nº" + index)}
      />
    )
  });
  
  return (
    <div className="Buttons">
      {buttons}
    </div>
  );
}