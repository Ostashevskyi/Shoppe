import React from "react";

import parse from "html-react-parser";
import { useParams, NavLink } from "react-router-dom";

import usePost from "@/hooks/usePost";

import { formatDate } from "@/utils/formatDate";

import Wrapper from "@/components/Wrapper";
import TwitterIcon from "@/components/icons/TwitterIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

const Post = () => {
  const { post } = useParams();

  const { data } = usePost(post);

  const postData = data?.post;

  const author = postData?.author;

  const formattedDate = formatDate(postData?.date);

  return (
    <Wrapper>
      <main className="mt-24 max-w-[670px] m-auto xs:mx-4 sm:mx-4">
        <div className="text-center text-text">
          <p className="heading1D mb-4 ">{postData?.title}</p>
          <p className="heading5D text-dark_gray mb-10">
            by <span className="text-text uppercase">{author?.name}</span> -
            {formattedDate}
          </p>
        </div>
        <div
          className=" post mb-24 text-text
        child-p:mb-5
        child-image:heading5D child-image:mb-5 child-image:w-full child-image:rounded-md
        child-h3:text-xl child-h3:mb-6 child-h3:font-bold
        child-ul:list-disc child-ul:pl-4 "
        >
          {parse(postData?.blogValue ? postData?.blogValue : "")}
        </div>
        <div className="flex items-center heading5D justify-between mb-11 xs:flex-col xs:items-start xs:gap-4 sm:flex-col sm:items-start sm:gap-4">
          <div className="flex items-center gap-2 text-text">
            <p>Tags</p>
            <div className="w-16 border-text border mt-1"></div>
            <p className="text-dark_gray">{postData?.tags}</p>
          </div>
          <div className="flex items-center gap-2 mt-0 text-text">
            <p>Share</p>
            <div className="w-16 border-text border mt-1"></div>
            <div className="flex items-center gap-6">
              <NavLink to="https://www.facebook.com/">
                <FacebookIcon fillColor="#979797" />
              </NavLink>
              <NavLink to="https://www.instagram.com/">
                <InstagramIcon fillColor="#979797" />
              </NavLink>
              <NavLink to="https://twitter.com/">
                <TwitterIcon fillColor="#979797" />
              </NavLink>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default Post;
