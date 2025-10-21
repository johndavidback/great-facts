
import React from 'react';

const FactDisplay = ({ fact }) => {
  return (
    <div className="fact-display">
      <p className="fact-text">{fact}</p>
    </div>
  );
};

export default FactDisplay;
