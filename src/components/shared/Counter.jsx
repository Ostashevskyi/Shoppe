import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(1);

  return (
    <div className="flex gap-6 text-dark_gray bg-light_gray w-[102px] h-[53px] items-center justify-center rounded-md">
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
        disabled={counter === 1}
        className="cursor-pointer"
      >
        -
      </button>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
