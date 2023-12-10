import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Toggle from "react-toggle";

import "react-toggle/style.css";
import { setInStock, setOnSale } from "../store/filterSlice";

export const ToggleCatalog = ({ label }) => {
  const [isTrue, setIsTrue] = useState(false);

  const dispatch = useDispatch();

  const check = label === "On sale";

  return (
    <div className="flex items-center justify-between mb-10">
      <label>{label}</label>
      <Toggle
        icons={false}
        defaultChecked={isTrue}
        onChange={() => {
          setIsTrue(!isTrue);
          dispatch(
            check ? dispatch(setOnSale(!isTrue)) : dispatch(setInStock(!isTrue))
          );
        }}
      />
    </div>
  );
};
