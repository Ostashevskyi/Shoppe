import React from "react";

const Dropdown = () => {
  return (
    <select
      className="py-4 pl-2 pr-44 border border-gray rounded-md"
      defaultValue="Sort By"
    >
      <option value="Sort By" disabled hidden>
        Sort by
      </option>
      <option value="None">None</option>
      <option value="Necklace">Necklace</option>
      <option value="Earrings">Earrings</option>
      <option value="Pins">Pins</option>
    </select>
  );
};

export default Dropdown;
