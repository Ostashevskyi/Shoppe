import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { setActiveOrderPage, setTotalOrder } from "@/store/paginationSlice";

import { ORDERS_ON_PAGE } from "@/utils/constants";

import { PaginationButton } from "@/components/Buttons/PaginationButton";

const OrdersPagination = ({ count }) => {
  const items = [
    ...Array(count ? Math.ceil(count / ORDERS_ON_PAGE) : 0).keys(),
  ];

  const { activeOrderPage } = useSelector((state) => state.pagination);

  useEffect(() => {
    dispatch(
      setTotalOrder({
        min: activeOrderPage === 1 ? 0 : activeOrderPage * 5 - ORDERS_ON_PAGE,
        max: activeOrderPage === 1 ? 4 : activeOrderPage * 5 - 1,
      })
    );
  }, [activeOrderPage]);

  const dispatch = useDispatch();

  const onNextPage = () => {
    dispatch(setActiveOrderPage(activeOrderPage + 1));
  };

  const onPreviousPage = () => {
    dispatch(setActiveOrderPage(activeOrderPage - 1));
  };

  const onSelectedPage = (e) => {
    dispatch(setActiveOrderPage(+e.target.innerHTML));
  };

  return (
    <div className="flex gap-2 items-center justify-center">
      {activeOrderPage !== 1 && items.length > 0 && (
        <PaginationButton func={onPreviousPage}>{"<-"}</PaginationButton>
      )}
      {items.map((num) => {
        return (
          <button
            className={`w-[40px] h-[40px]  rounded-md border focus:scale-95 ${
              activeOrderPage === num + 1
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
      {activeOrderPage !== items.length && items.length > 0 && (
        <PaginationButton func={onNextPage}>{"->"}</PaginationButton>
      )}
    </div>
  );
};

export default OrdersPagination;
