import { useState } from "react";
import { GoChevronRight, GoChevronDown } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedSection = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronRight />} </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex cursor-pointer items-center justify-between border-b bg-gray-50 p-3"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        <div>
          {isExpanded && <div className="border-b p-5">{item.content}</div>}
        </div>
      </div>
    );
  });
  return <div className="rounded border-x border-t">{renderedSection}</div>;
};

export default Accordion;
