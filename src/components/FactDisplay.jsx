
import React, { useState } from 'react';

const FactDisplay = ({ fact }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const textToCopy = `${fact} (factmenow.com)`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // Hide 'Copied!' message after 2 seconds
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className="fact-display">
      <p className="fact-text" onClick={handleCopyClick} style={{ cursor: 'pointer' }}>
        {fact}
      </p>
      {copied && <span className="copied-message">Copied!</span>}
    </div>
  );
};

export default FactDisplay;
