import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { HoverImage } from "./Image";

const ProductCard = ({ product, small }) => {
  const { image } = product;
  const { responsiveImage } = image;

  const SalePrice = useMemo(() => {
    return (
      <div className="flex items-center gap-4 mt-4">
        <p className="text-errors line-through heading4D font-medium">
          $ {product.price.toFixed(2)}
        </p>
        <p className="text-accent heading4D font-medium">
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
        } rounded-md absolute top-4 left-4 flex justify-center items-center`}
      >
        {!product.isAvaliable && (
          <p className="text-white body_smallD font-medium">Sold</p>
        )}
        {product.isNew && (
          <p className="text-black body_smallD font-medium">New</p>
        )}
        {product.isDiscount && (
          <p className="text-white body_smallD font-medium">
            -%{product.discount}
          </p>
        )}
      </div>
    );
  }, [product.isAvaliable, product.isNew, product.isDiscount]);

  const Price = useMemo(() => {
    return (
      <p className="text-accent heading4D font-medium mt-4">
        $ {product["price"].toFixed(2)}
      </p>
    );
  });

  return (
    <div className={`mb-20  ${small && "max-w-[300px]"}`}>
      <div className="w-fit relative">
        <HoverImage
          data={responsiveImage}
          slug={product.slug}
          className="rounded-md mb-6"
        />
        {(product.isNew || !product.isAvaliable || product.isDiscount) &&
          ProductLabel}
      </div>
      <div>
        <NavLink to={`/products/${product.slug}`} className="heading3D">
          {product.title}
        </NavLink>
        {product.isDiscount && SalePrice}
        {!product.isAvaliable && (
          <p className="text-accent heading4D font-medium mt-4">Sold Out</p>
        )}
        {!product.isNew && product.isAvaliable && !product.isDiscount && Price}
      </div>
    </div>
  );
};

export default ProductCard;
