// This is the FAQ page 

import { useState } from "react";



const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item py-2 px-4 ml-8 font-mono">

      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{isActive ? '-' : '+'}</div>
          <div>{title}</div>
      </div>

        {isActive && <div className="accordion-content">{content}</div>}

    </div>

  );
};

export default Accordion;