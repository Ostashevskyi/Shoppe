import React, { useState } from "react";
import image from "@/assets/images/img.png";

const ProductCard = () => {
  const [isAvaliable, setIsAvaliable] = useState(true);
  const [isNew, setIsNew] = useState(false);
  const [isDiscount, setIsDiscount] = useState(true);

  return (
    <div>
      <div className="w-fit relative">
        <img src={image} alt="img" className="rounded-md mb-6" />
        <div
          className={`w-11 h-6 ${
            isNew ? "bg-white" : "bg-accent"
          } rounded-md absolute top-4 left-4 flex justify-center items-center`}
        >
          {!isAvaliable && (
            <p className="text-white body_smallD font-medium">Sold</p>
          )}
          {isNew && <p className="text-black body_smallD font-medium">New</p>}
          {isDiscount && (
            <p className="text-white body_smallD font-medium">- %21</p>
          )}
        </div>
      </div>
      <div>
        <p className="mb-4 heading3D">Lira Earrings</p>
        <div className="flex items-center gap-4">
          {isDiscount && (
            <p className="text-errors line-through heading4D font-medium">
              $ 20,00
            </p>
          )}
          <p className="text-accent heading4D font-medium">$ 20,00</p>
        </div>
      </div>
    </div>
  );
};

const ProductLabel = () => {
  return;
};

export default ProductCard;
