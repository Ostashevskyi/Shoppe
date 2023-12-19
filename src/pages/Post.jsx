import React from "react";
import Wrapper from "@/components/Wrapper";
import { useParams } from "react-router-dom";
import usePost from "@/hooks/usePost";
import { formatDate } from "@/utils/formatDate";
import parse from "html-react-parser";
import FacebookIcon from "../components/icons/FacebookIcon";
import InstagramIcon from "../components/icons/InstagramIcon";
import TwitterIcon from "../components/icons/TwitterIcon";

const Post = () => {
  const { post } = useParams();

  const { data } = usePost(post);

  const postData = data?.post;

  const author = postData?.author;

  const formattedDate = formatDate(postData?.date);

  return (
    <Wrapper>
      <main className="mt-24 max-w-[670px] m-auto">
        <div className="text-center">
          <p className="heading1D mb-4">{postData?.title}</p>
          <p className="heading5D text-dark_gray mb-10">
            by <span className="text-black uppercase">{author?.name}</span> -
            {formattedDate}
          </p>
        </div>
        <div
          className=" post mb-24
        child-p:mb-5
        child-image:heading5D child-image:mb-5 child-image:w-full
        child-h3:text-xl child-h3:mb-6 child-h3:font-bold
        child-ul:list-disc child-ul:pl-4 "
        >
          {parse(postData?.blogValue ? postData?.blogValue : "")}
        </div>
        <div className="flex items-center heading5D justify-between mb-11">
          <div className="flex items-center gap-2">
            <p>Tags</p>
            <div className="w-16 border-black border mt-1"></div>
            <p className="text-dark_gray">{postData?.tags}</p>
          </div>
          <div className="flex items-center gap-2 mt-0">
            <p>Share</p>
            <div className="w-16 border-black border mt-1"></div>
            <div className="flex items-center gap-6">
              <FacebookIcon fillColor={"#979797"} />
              <InstagramIcon fillColor={"#979797"} />
              <TwitterIcon fillColor={"#979797"} />
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default Post;
