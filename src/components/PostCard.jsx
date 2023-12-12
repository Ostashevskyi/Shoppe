import React from "react";
import { Image } from "react-datocms/image";
import { NavLink } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <section className="max-w-[450px]">
      <Image data={post.image.responsiveImage} />
      <div className="mb-6">
        <p className="body_medium text-dark_gray mt-5 mb-1">
          {post.category} - {post.date}
        </p>
        <p className="heading3D mb-3">{post.title}</p>
        <p className="heading5D text-dark_gray">{post.shortDescription}...</p>
      </div>
      <NavLink to={post.slug} className="body_large text-accent">
        Read More
      </NavLink>
    </section>
  );
};

export default PostCard;
