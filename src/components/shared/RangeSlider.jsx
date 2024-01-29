import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import MultiRangeSlider from "multi-range-slider-react";

import { setPrice } from "@/store/filterSlice";

const RangeSlider = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50);

  const dispatch = useDispatch();

  const colors = {
    black: "#000000",
    light_gray: "#EFEFEF",
  };

  const handleInput = (e) => {
    setMinPrice(e.minValue);
    setMaxPrice(e.maxValue);
  };

  useEffect(() => {
    dispatch(setPrice({ minPrice, maxPrice }));
  }, [minPrice, maxPrice]);

  const handleClick = () => {
    setMinPrice(0);
    setMaxPrice(50);
  };

  return (
    <div>
      <MultiRangeSlider
        min={0}
        max={50}
        minValue={minPrice}
        maxValue={maxPrice}
        className="border-none shadow-none"
        ruler="false"
        label="false"
        canMinMaxValueSame
        barInnerColor={colors.black}
        barLeftColor={colors.light_gray}
        barRightColor={colors.light_gray}
        thumbLeftColor={colors.light_gray}
        onInput={(e) => {
          handleInput(e);
        }}
      />
      <div className="flex justify-between body_medium mb-10">
        <p className="text-dark_gray">
          Price: ${minPrice} - ${maxPrice}
        </p>
        <button
          className="text-accent"
          onClick={() => {
            handleClick();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default RangeSlider;
