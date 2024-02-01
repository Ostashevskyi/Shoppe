import React, { useEffect, useState, useMemo } from "react";

import { useDispatch } from "react-redux";
import MultiRangeSlider from "multi-range-slider-react";

import { setPrice } from "@/store/filterSlice";
import getTheme from "@/utils/GetTheme";

const RangeSlider = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50);
  const [colors, setColors] = useState({
    barInnerColor: "#000000",
    barsColor: "#000000",
  });

  const dispatch = useDispatch();

  const theme = getTheme();

  useEffect(() => {
    switch (theme) {
      case "dark":
        setColors({
          barInnerColor: "#ffffff",
          barsColor: "#707070",
        });
        return;
      case "light":
        setColors({
          barInnerColor: "#000000",
          barsColor: "#efefef",
        });
        return;
      default:
        return;
    }
  }, [theme]);

  console.log(colors);

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

  const range = useMemo(() => {
    return (
      <MultiRangeSlider
        min={0}
        max={50}
        minValue={minPrice}
        maxValue={maxPrice}
        className="border-none shadow-none"
        ruler="false"
        label="false"
        canMinMaxValueSame
        barInnerColor={colors.barInnerColor}
        barLeftColor={colors.barsColor}
        barRightColor={colors.barsColor}
        thumbLeftColor={colors.barInnerColor}
        thumbRightColor={colors.barInnerColor}
        onInput={(e) => {
          handleInput(e);
        }}
      />
    );
  }, [colors]);

  return (
    <div>
      {range}
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
