import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getOrderByNumber } from "@/store/orderSlice";

import { formatDate } from "@/utils/formatDate";

import Wrapper from "@/components/Wrapper";

const OrderDetails = () => {
  const { order_number } = useParams();
  const dispatch = useDispatch();

  const { orderByNumber } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getOrderByNumber({ order_number }));
  }, []);

  return (
    <Wrapper>
      {orderByNumber?.map((order) => {
        const {
          contact_phone,
          delivery_address,
          delivery_city,
          delivery_country,
          delivery_options,
          email,
          order_date,
          order_number,
          payment_method,
          products,
          shipping_price,
          subtotal_price,
          total,
        } = order;

        const product = JSON.parse(products);

        return (
          <main className="mt-24 flex justify-between mb-60 mx-4 xs:flex-col xs:mt-10 xs:mb-24 sm:flex-col sm:mt-10 sm:mb-24 md:flex-col md:mb-24 text-text">
            <section>
              <p className="mb-7 heading2D ">Order Details</p>
              <div className="flex gap-32 heading5D xs:flex-col xs:gap-10 sm:gap-10">
                <div className="flex flex-col gap-9">
                  <div>
                    <p className="uppercase mb-[6px]">Order Number</p>
                    <p className="text-dark_gray">{order_number}</p>
                  </div>
                  <div>
                    <p className="uppercase mb-[6px]">Email</p>
                    <p className="text-dark_gray">{email}</p>
                  </div>
                  <div>
                    <p className="uppercase mb-[6px]">Payment Method</p>
                    <p className="text-dark_gray">{payment_method}</p>
                  </div>
                  <div>
                    <p className="uppercase mb-[6px]">Order Date</p>
                    <p className="text-dark_gray">{formatDate(order_date)}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-9">
                  <div>
                    <p className="uppercase mb-[6px]">Delivery Options</p>
                    <p className="text-dark_gray">{delivery_options}</p>
                  </div>
                  <div>
                    <p className="uppercase mb-[6px]">Delivery Address</p>
                    <div className="text-dark_gray">
                      <p>{delivery_address}</p>
                      <p>{delivery_city}</p>
                      <p>{delivery_country}</p>
                    </div>
                  </div>
                  <div>
                    <p className="uppercase mb-[6px]">Contact Number</p>
                    <p className="text-dark_gray">{contact_phone}</p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <p className="mb-9 heading2D xs:mt-12 sm:mt-12 md:mt-12">
                Order Summary
              </p>
              <div className="py-9 px-14 bg-light_gray">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray uppercase">
                  <p>Product</p>
                  <p>Total</p>
                </div>
                <div className="border-b border-gray pb-3 mb-3 flex flex-col gap-y-6">
                  {product?.map((el) => (
                    <div className="flex justify-between gap-40 xs:gap-0 sm:gap-0">
                      <p className="heading5D text-dark_gray xs:text-xs sm:text-sm">
                        {el.name}
                        {` (x${el.quantity})`}
                      </p>
                      <p className="heading5D text-dark_gray xs:text-xs sm:text-sm">
                        ${el.price}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-gray uppercase heading5D xs:text-xs sm:text-sm">
                  <p>Subtotal</p>
                  <p className="text-dark_gray ">${subtotal_price}</p>
                </div>
                <div className="flex items-center justify-between pb-2 mb-6 border-b border-gray uppercase heading5D xs:text-xs sm:text-sm">
                  <p>Shipping</p>
                  <p className="text-dark_gray">${shipping_price}</p>
                </div>
                <div className="flex items-center justify-between pb-2 mb-6  uppercase body_large xs:text-sm sm:text-base">
                  <p>Total</p>
                  <p>${total}</p>
                </div>
              </div>
            </section>
          </main>
        );
      })}
    </Wrapper>
  );
};

export default OrderDetails;
