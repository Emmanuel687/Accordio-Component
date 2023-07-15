import React from "react";
import AccordionItem from "./AccordionItem";
import "./Style.css";
import { useState } from "react";

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="Test One"
        num="Text 1"
        key="test 1"
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>
            Break up UI into components Make components reusable Place state
            efficiently.
          </li>
          <li>
            Make components reusable
          </li>
          <li>
            Place state efficiently
          </li>
        </ul>
      </AccordionItem>
    </div>
  );
}

export default Accordion;
