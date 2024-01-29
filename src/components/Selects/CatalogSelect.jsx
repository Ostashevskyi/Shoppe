import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { setCatalogCategory } from "@/store/filterSlice";

export const CatalogSelect = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    if (e.target.value === "") {
      searchParams.delete("sortBy");
    } else if (e.target.value) {
      searchParams.set("sortBy", e.target.value);
    }

    setSearchParams(searchParams);

    dispatch(setCatalogCategory(e.target.value));
  };

  useEffect(() => {
    setSearchParams();
    dispatch(setCatalogCategory(""));
  }, []);

  return (
    <select
      className="py-4 pl-2 pr-44 border border-gray rounded-md"
      defaultValue={
        searchParams.get("sortBy") ? searchParams.get("sortBy") : "Sort By"
      }
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
