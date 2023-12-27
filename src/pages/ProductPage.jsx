import React, { useState } from "react";

import ReactStars from "react-stars";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";

import useProduct from "../hooks/useProduct";
import useSimilarProducts from "../hooks/useSimilarProducts";

import Wrapper from "@/components/Wrapper";
import Counter from "@/components/shared/Counter";
import MailIcon from "@/components/icons/MailIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import { ButtonM } from "@/components/Buttons/ButtonM";
import TwitterIcon from "@/components/icons/TwitterIcon";
import ProductCard from "@/components/shared/ProductCard";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { AdditionalImage } from "@/components/Images/AdditionalImage";

const ProductPage = () => {
  const [isActive, setIsActive] = useState(true);

  const { item } = useParams();

  const { data } = useProduct({ slug: item });

  const product = data?.product;

  const images = product?.additionalImages;

  // get similar images

  const info = useSimilarProducts({ slug: item });

  const similarProducts = info?.data;
  const allSimilarProducts = similarProducts?.allProducts;

  return (
    <Wrapper>
      <main className="mt-32 mb-64">
        <div className="flex gap-16 mb-32">
          <div className="flex gap-10">
            <div className="flex flex-col justify-between">
              {images?.map((image, index) => {
                return <AdditionalImage key={index} data={image} />;
              })}
            </div>
            <div>
              <img
                src={product?.image?.responsiveImage?.src}
                className="h-[600px]"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-6 mb-16">
              <p className="heading2D text-black">{product?.title}</p>
              {product?.isDiscount && (
                <div className="flex items-center gap-4 mt-4">
                  <p className="text-errors line-through heading4D font-medium">
                    $ {product?.price?.toFixed(2)}
                  </p>
                  <p className="text-accent heading4D font-medium">
                    $ {product?.salePrice?.toFixed(2)}
                  </p>
                </div>
              )}
              {!product?.isAvaliable && (
                <p className="text-accent heading4D font-medium mt-4">
                  Sold Out
                </p>
              )}
              {product?.isAvaliable && !product?.isDiscount && (
                <p className="heading4D text-accent">
                  $ {product?.price?.toFixed(2)}
                </p>
              )}
            </div>
            <div className="flex gap-6 items-center mb-5">
              <ReactStars
                count={5}
                size={30}
                edit={false}
                value={product?.stars}
              />
              <p className="heading5D text-dark_gray">1 customer review</p>
            </div>
            <p className="max-w-[484px] heading5D text-dark_gray mb-12">
              {product?.shortDescription}
            </p>
            <div className="flex items-center justify-between gap-6 mb-20">
              <Counter />
              <ButtonM disabled={!product?.isAvaliable}>Add to cart</ButtonM>
            </div>
            <div className="flex items-center mb-9">
              <div className="pr-10 border-r-2 border-light_gray">
                <HeartIcon fillColor="gray" />
              </div>
              <div className="flex gap-6 items-center ml-10">
                <MailIcon fillColor="gray" />
                <FacebookIcon fillColor="gray" />
                <InstagramIcon fillColor="gray" />
                <TwitterIcon fillColor="gray" />
              </div>
            </div>
            <div className="heading5D">
              <div className="flex gap-4 items-center ">
                <p className="mr-4">SKU:</p>
                <p className=" text-dark_gray">{product?.sku}</p>
              </div>
              <div className="flex gap-4 items-center ">
                <p className="mr-4">Categories:</p>
                <p className="text-dark_gray">{product?.tags}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-24 heading3D text-dark_gray mb-16">
            <button
              className={`${isActive && "text-black"}`}
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              Description
            </button>
            <button
              className={`${!isActive && "text-black"}  `}
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              Additional information
            </button>
          </div>
          <div className="heading5D text-dark_gray mb-24">
            {isActive ? (
              <p>{product?.description}</p>
            ) : (
              <div>
                {parse(
                  product?.additionalInformation
                    ? product?.additionalInformation
                    : ""
                )}
              </div>
            )}
          </div>
        </div>
        <div>
          <p className="heading2D mb-12">Similar Items</p>
          <div className="flex gap-12">
            {allSimilarProducts?.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default ProductPage;
