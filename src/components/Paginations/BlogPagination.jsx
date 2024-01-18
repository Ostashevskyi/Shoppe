import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { onBlogPageSkip, setActiveBlogPage } from "@/store/paginationSlice";

import { POSTS_ON_PAGE } from "../../utils/constants";

import { PaginationButton } from "@/components/Buttons/PaginationButton";

const BlogPagination = ({ count }) => {
  const items = [...Array(count ? Math.ceil(count / POSTS_ON_PAGE) : 0).keys()];

  const { activeBlogPage } = useSelector((state) => state.pagination);
  const { title, filterType } = useSelector((state) => state.filter);

  useEffect(() => {
    if (title || filterType) {
      dispatch(setActiveBlogPage(1));
    }
    dispatch(onBlogPageSkip(POSTS_ON_PAGE * activeBlogPage - POSTS_ON_PAGE));
  }, [activeBlogPage, title, filterType]);

  const dispatch = useDispatch();

  const onNextPage = () => {
    dispatch(setActiveBlogPage(activeBlogPage + 1));
  };

  const onPreviousPage = () => {
    dispatch(setActiveBlogPage(activeBlogPage - 1));
  };

  const onSelectedPage = (e) => {
    dispatch(setActiveBlogPage(+e.target.innerHTML));
  };

  return (
    <div className="flex gap-2 items-center justify-center">
      {activeBlogPage !== 1 && items.length > 0 && (
        <PaginationButton func={onPreviousPage}>{"<-"}</PaginationButton>
      )}
      {items.map((num) => {
        return (
          <button
            className={`w-[40px] h-[40px]  rounded-md border  ${
              activeBlogPage === num + 1
                ? "bg-black text-white"
                : "bg-white text-black border-light_gray"
            }`}
            key={num}
            onClick={(e) => {
              onSelectedPage(e);
            }}
          >
            {num + 1}
          </button>
        );
      })}
      {activeBlogPage !== items.length && items.length > 0 && (
        <PaginationButton func={onNextPage}>{"->"}</PaginationButton>
      )}
    </div>
  );
};

export default BlogPagination;
