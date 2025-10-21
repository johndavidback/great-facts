
import React, { forwardRef } from 'react';

const FactButton = forwardRef(({ onClick }, ref) => {
  return (
    <button ref={ref} className="fact-button" onClick={onClick}>
      FACT ME
    </button>
  );
});

export default FactButton;
