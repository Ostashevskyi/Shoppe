import React from "react";
import { useDispatch } from "react-redux";
import { setFilterType } from "../store/filterSlice";

export const CatalogSelect = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilterType(e.target.value));
  };

  return (
    <select
      className="py-4 pl-2 pr-44 border border-gray rounded-md"
      defaultValue="Sort By"
      onChange={(e) => handleChange(e)}
    >
      <option value="Sort By" disabled hidden>
        Sort by
      </option>
      <option value="">None</option>
      <option value="necklace">Necklace</option>
      <option value="earrings">Earrings</option>
      <option value="pin">Pins</option>
    </select>
  );
};
