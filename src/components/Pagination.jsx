import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onPageSkip, setActivePage } from "../store/paginationSlice";
import { POSTS_ON_PAGE } from "../utils/constants";
import { ButtonPagination } from "./Button";

const Pagination = ({ count }) => {
  const items = [...Array(count ? Math.ceil(count / 4) : 0).keys()];

  const { activePage } = useSelector((state) => state.pagination);
  const { title, filterType } = useSelector((state) => state.filter);

  useEffect(() => {
    if (title || filterType) {
      dispatch(setActivePage(1));
    }
    dispatch(onPageSkip(POSTS_ON_PAGE * activePage - POSTS_ON_PAGE));
  }, [activePage, title, filterType]);

  const dispatch = useDispatch();

  const onNextPage = () => {
    dispatch(setActivePage(activePage + 1));
  };

  const onPreviousPage = () => {
    dispatch(setActivePage(activePage - 1));
  };

  const onSelectedPage = (e) => {
    dispatch(setActivePage(+e.target.innerHTML));
  };

  return (
    <div className="flex gap-2 items-center justify-center">
      {activePage !== 1 && items.length > 0 && (
        <ButtonPagination func={onPreviousPage}>{"<-"}</ButtonPagination>
      )}
      {items.map((num) => {
        return (
          <button
            className={`w-[40px] h-[40px]  rounded-md border  ${
              activePage === num + 1
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
      {activePage !== items.length && items.length > 0 && (
        <ButtonPagination func={onNextPage}>{"->"}</ButtonPagination>
      )}
    </div>
  );
};

export default Pagination;
