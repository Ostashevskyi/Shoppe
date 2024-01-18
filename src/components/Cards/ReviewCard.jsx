import React from "react";
import { formatDate } from "../../utils/formatDate";
import { Rating, ThinRoundedStar } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { STAR_STYLES } from "../../utils/constants";

const ReviewCard = ({ review }) => {
  const formatedDate = formatDate(review.created_at);

  return (
    <div className="pb-9 border-b border-gray mb-6 w-full">
      <div className="flex gap-4 mb-4 items-baseline">
        <p className="heading3D">{review.username}</p>
        <p className="body_medium text-dark_gray">{formatedDate}</p>
      </div>
      <Rating
        value={review.rating}
        itemStyles={STAR_STYLES}
        style={{ maxWidth: 90, marginBottom: 24 }}
        readOnly
      />
      <p className="text-dark_gray">{review.review}</p>
    </div>
  );
};

export default ReviewCard;
