import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

const DropdownPage = () => {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  let options = [
    {
      label: "I want mild",
      value: "mild",
    },
    {
      label: `I'd like spicy`,
      value: "spicy",
    },
    {
      label: "Give me extra spicy!",
      value: "extra_spicy",
    },
  ];
  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
};

export default DropdownPage;
