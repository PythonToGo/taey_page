import React, { useState, useEffect } from 'react';

const Cube = () => {
  const [rotate, setRotate] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggleRotate = () => {
    setRotate(!rotate);
    if (expanded) setExpanded(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (rotate && currentScroll > 100) {
        setExpanded(true);
      } else {
        setExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [rotate, expanded]);

  return (
    <div className="perspective">
      <div className={`cube ${rotate ? 'rotate-cube' : ''} ${expanded ? 'expanded-cube' : ''}`} onClick={toggleRotate}>
        <div className="face">Home</div>
        <div className="face back">AboutMe</div>
        <div className="face front">Projects</div>
        <div className="face bottom">Contacts</div>
      </div>
    </div>
  );
};

export default Cube;
