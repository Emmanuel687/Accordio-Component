import React from "react";
import AccordionItem from "./AccordionItem";
import "./Style.css"

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={i} />
      ))}
    </div>
  );
}

export default Accordion;
