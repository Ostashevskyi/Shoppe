import React, { useEffect, useState } from "react";

import parse from "html-react-parser";
import { useAuth0 } from "@auth0/auth0-react";
import { Rating } from "@smastrom/react-rating";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import useProduct from "@/hooks/useProduct";
import useSimilarProducts from "@/hooks/useSimilarProducts";

import { getReviews } from "@/store/reviewsSlice";

import { STAR_STYLES } from "@/utils/constants";
import { averageValue } from "@/utils/averaneValue";
import { calcScreenWidth } from "@/utils/calcScreenWidth";

import Wrapper from "@/components/Wrapper";
import ReviewCard from "@/components/Cards/ReviewCard";
import NotAllowed from "@/components/shared/NotAllowed";
import TwitterIcon from "@/components/icons/TwitterIcon";
import ProductCard from "@/components/Cards/ProductCard";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import SimilarSlider from "@/components/Sliders/SimilarSlider";
import ProductSlider from "@/components/Sliders/ProductSlider";
import AddToCartButton from "@/components/Buttons/AddToCartButton";
import ProductReviewForm from "@/components/Forms/ProductReviewForm";
import { AdditionalImage } from "@/components/Images/AdditionalImage";

const ProductPage = () => {
  const [isActive, setIsActive] = useState("description");
  const [averageRating, setAverageRating] = useState(0);
  const [reviewsLength, setReviewsLength] = useState(0);

  const { item } = useParams();

  const { data } = useProduct({ slug: item });

  const product = data?.product;

  const images = product?.additionalImages;
  const image = product?.image;

  const info = useSimilarProducts({ slug: item });

  const similarProducts = info?.data;
  const allSimilarProducts = similarProducts?.allProducts;

  const dispatch = useDispatch();

  const { reviews } = useSelector((state) => state.reviews);

  const reversedReviews = reviews?.slice().reverse();

  const allPhotos = images && [image, ...images];

  const width = calcScreenWidth();

  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    product?.title && dispatch(getReviews(product?.title));
  }, [product]);

  useEffect(() => {
    const reviewsRatingArray = reviews?.map((review) => review.rating);
    setAverageRating(averageValue(reviewsRatingArray));

    setReviewsLength(reviews?.length);
  }, [reviews]);

  return (
    <Wrapper>
      <main className="mt-32 mb-64 xs:mx-4 xs:mt-4 sm:mx-4 sm:mt-4 md:mx-4 md:mt-4 lg:mx-4 xs:mb-16 sm:mb-16 md:mb-16">
        <div className="flex gap-16 mb-32 xs:flex-col sm:flex-col md:flex-col xs:mb-10 sm:mb-10">
          <div className="flex gap-10">
            {width < 767 ? (
              <ProductSlider products={allPhotos} />
            ) : (
              <>
                <div className="flex flex-col justify-between max-w-[120px] ">
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
              </>
            )}
          </div>
          <div>
            <div className="flex flex-col gap-6 mb-16 xs:mb-6">
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
              <Rating
                itemStyles={STAR_STYLES}
                value={averageRating}
                style={{ maxWidth: 90 }}
                readOnly
              />
              <p className="heading5D text-dark_gray">
                {reviewsLength} customer{" "}
                {reviewsLength > 1 ? "reviews" : "review"}
              </p>
            </div>
            <p className="max-w-[484px] heading5D text-dark_gray mb-12">
              {product?.shortDescription}
            </p>
            <div className="mb-20 w-full md:w-[400px]">
              {isAuthenticated ? (
                <AddToCartButton buttonType={"button"} product={product} />
              ) : (
                <NotAllowed message={"add to the cart"} />
              )}
            </div>
            <div className="flex items-center mb-9">
              <div className="flex gap-6 items-center">
                <NavLink to="https://www.linkedin.com/">
                  <LinkedinIcon fillColor="gray" />
                </NavLink>
                <NavLink to="https://www.facebook.com/">
                  <FacebookIcon fillColor="gray" />
                </NavLink>
                <NavLink to="https://www.instagram.com/">
                  <InstagramIcon fillColor="gray" />
                </NavLink>
                <NavLink to="https://twitter.com/">
                  <TwitterIcon fillColor="gray" />
                </NavLink>
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
          <div className="flex gap-24 heading3D text-dark_gray mb-16 xs:flex-col xs:items-start sm:flex-col sm:items-start xs:gap-6 sm:gap-6">
            <button
              className={`${isActive === "description" && "text-black"}`}
              onClick={() => {
                setIsActive("description");
              }}
            >
              Description
            </button>
            <button
              className={`${isActive === "addInfo" && "text-black"}  `}
              onClick={() => {
                setIsActive("addInfo");
              }}
            >
              Additional information
            </button>
            <button
              className={`${isActive === "reviews" && "text-black"}  `}
              onClick={() => {
                setIsActive("reviews");
              }}
            >
              Reviews({reviewsLength})
            </button>
          </div>
          <div className="heading5D  mb-24">
            {isActive === "description" && (
              <p className="text-dark_gray">{product?.description}</p>
            )}

            {isActive === "addInfo" && (
              <div className="text-dark_gray">
                {parse(
                  product?.additionalInformation
                    ? product?.additionalInformation
                    : ""
                )}
              </div>
            )}

            {isActive === "reviews" && (
              <div className="flex justify-between gap-20 xs:flex-col sm:flex-col md:flex-col">
                <div className="max-h-[600px] overflow-y-scroll no-scrollbar overscroll-contain ">
                  <p className="mb-16 heading3D xs:text-base">
                    {reviewsLength} {reviewsLength > 1 ? "Reviews " : "Review "}
                    for {product?.title}
                  </p>
                  {reversedReviews.length ? (
                    reversedReviews?.map((review) => (
                      <ReviewCard key={review.id} review={review} />
                    ))
                  ) : (
                    <p>
                      There seem to be no reviews yet. Be the first to review
                      this product
                    </p>
                  )}
                </div>
                {isAuthenticated ? (
                  <div>
                    <p className="mb-2 heading3D text-black">Add a Review</p>
                    <p className="mb-11 heading5D text-dark_gray">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <ProductReviewForm productName={product?.title} />
                  </div>
                ) : (
                  <NotAllowed message={"review"} />
                )}
              </div>
            )}
          </div>
        </div>
        <div>
          <p className="heading2D mb-12">Similar Items</p>
          <div className="flex gap-12">
            {width < 767 ? (
              <SimilarSlider products={allSimilarProducts} />
            ) : (
              allSimilarProducts?.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))
            )}
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default ProductPage;
