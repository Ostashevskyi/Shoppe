import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import "@smastrom/react-rating/style.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Rating } from "@smastrom/react-rating";

import { useUserID } from "@/hooks/useUserID";

import { putReviews } from "@/store/reviewsSlice";

import { STAR_STYLES } from "@/utils/constants";
import { EMAIL_PATTERN } from "@/utils/constants";

import { Input } from "@/components/Inputs/Input";
import { SubmitInput } from "@/components/Inputs/SubmitInput";
import { ErrorMessage } from "@/components/shared/ErrorMessage";

const ProductReviewForm = ({ productName }) => {
  const [starsRating, setStarsRating] = useState(1);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful)
      reset({
        ["Your Review"]: "",
        ["Enter your name"]: "",
        ["Enter your email"]: "",
      });
  });

  const { user } = useAuth0();
  const userID = useUserID(user);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const productReview = {
      productName,
      review: data["Your Review"],
      username: data["Enter your name"],
      email: data["Enter your email"],
      userID,
      rating: starsRating,
    };

    dispatch(putReviews({ productReview }));

    setStarsRating(0);
  };
  return (
    <form
      className="flex flex-col gap-11 justify-center "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input label={"Your Review"} register={register} required />
        {errors["Your Review"] && <ErrorMessage required />}
      </div>
      <div>
        <Input label={"Enter your name"} register={register} required />
        {errors["Enter your name"] && <ErrorMessage required />}
      </div>
      <div>
        <Input
          label={"Enter your email"}
          register={register}
          required
          pattern={EMAIL_PATTERN}
        />
        {errors["Enter your email"]?.type === "required" && (
          <ErrorMessage required />
        )}
        {errors["Enter your email"]?.type === "pattern" && <ErrorMessage />}
      </div>
      <div>
        <p className="mb-3 heading5D font-normal text-dark_gray">
          Your Rating *
        </p>
        <Rating
          value={starsRating}
          itemStyles={STAR_STYLES}
          style={{ maxWidth: 90, marginBottom: 48 }}
          onChange={setStarsRating}
          isRequired
        />
      </div>
      <div className="max-w-[123px]">
        <SubmitInput />
      </div>
    </form>
  );
};

export default ProductReviewForm;
