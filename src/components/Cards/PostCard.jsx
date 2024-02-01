import React from "react";

import { NavLink } from "react-router-dom";
import { Image } from "react-datocms/image";

import { formatDate } from "@/utils/formatDate";

const PostCard = ({ post }) => {
  const formattedDate = formatDate(post.date);

  return (
    <section className="max-w-[400px] mb-6 md:max-w-[355px] lg:max-w-[355px]">
      <Image data={post.image.responsiveImage} />
      <div className="mb-6">
        <p className="body_medium text-dark_gray mt-5 mb-1">
          {post.category} - {formattedDate}
        </p>
        <NavLink to={post.slug} className="heading3D mb-3 text-text">
          {post.title}
        </NavLink>
        <p className="heading5D text-dark_gray">{post.shortDescription}...</p>
      </div>
      <NavLink to={`/blog/${post.slug}`} className="body_large text-accent">
        Read More
      </NavLink>
    </section>
  );
};

export default PostCard;
