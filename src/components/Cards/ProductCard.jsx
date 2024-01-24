import React, { useMemo } from "react";

import { NavLink } from "react-router-dom";

import { HoverImage } from "@/components/Images/HoverImage";

const ProductCard = ({ product, small }) => {
  const SalePrice = useMemo(() => {
    return (
      <div className="flex items-center gap-4 mt-4">
        <p className="text-errors line-through heading4D font-medium xs:text-sm sm:text-sm">
          $ {product.price.toFixed(2)}
        </p>
        <p className="text-accent heading4D font-medium xs:text-sm sm:text-sm">
          $ {product.salePrice?.toFixed(2)}
        </p>
      </div>
    );
  }, [product.salePrice, product.discount, product.price]);

  const ProductLabel = useMemo(() => {
    return (
      <div
        className={`w-11 h-6 ${
          product.isNew ? "bg-white" : "bg-accent"
        } rounded-md absolute top-4 left-4 xs:top-1 xs:left-1 sm:top-1 sm:left-2 flex justify-center items-center`}
      >
        {!product.isAvaliable && (
          <p className="text-white body_smallD font-medium xs:text-xs sm:text-sm">
            Sold
          </p>
        )}
        {product.isNew && (
          <p className="text-black body_smallD font-medium xs:text-xs sm:text-sm">
            New
          </p>
        )}
        {product.isDiscount && (
          <p className="text-white body_smallD font-medium xs:text-xs sm:text-sm">
            -%{product.discount}
          </p>
        )}
      </div>
    );
  }, [product.isAvaliable, product.isNew, product.isDiscount]);

  const Price = useMemo(() => {
    return (
      <p className="text-accent heading4D font-medium mt-4 xs:text-sm sm:text-sm">
        $ {product["price"].toFixed(2)}
      </p>
    );
  });

  return (
    <div
      className={`mb-20 xs:mb-6 sm:mb-6  ${
        small && "max-w-[300px]"
      } xs:max-w-[141px] sm:max-w-[180px] md:max-w-[350px] lg:max-w-[300px]`}
    >
      <div className="w-fit relative">
        <HoverImage
          data={product}
          slug={product.slug}
          className="rounded-md mb-6"
        />
        {(product.isNew || !product.isAvaliable || product.isDiscount) &&
          ProductLabel}
      </div>
      <div>
        <NavLink
          to={`/products/${product.slug}`}
          className="heading3D xs:text-[13px] sm:text-sm"
        >
          {product.title}
        </NavLink>
        {product.isDiscount && SalePrice}
        {!product.isAvaliable && (
          <p className="text-accent heading4D font-medium mt-4 xs:text-sm sm:text-sm">
            Sold Out
          </p>
        )}
        {!product.isNew && product.isAvaliable && !product.isDiscount && Price}
      </div>
    </div>
  );
};

export default ProductCard;
