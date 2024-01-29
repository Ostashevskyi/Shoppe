import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";

import { useUserID } from "@/hooks/useUserID";

import { getOrders } from "@/store/orderSlice";

import { formatDate } from "@/utils/formatDate";
import { calcScreenWidth } from "@/utils/calcScreenWidth";

import OrdersPagination from "@/components/Paginations/OrdersPagination";

const Orders = () => {
  const { user } = useAuth0();
  const userID = useUserID(user);

  const [filteredOrders, setFilteredOrders] = useState();

  const { orders } = useSelector((state) => state.orders);

  const reversedOrders = orders?.slice().reverse();

  const { totalOrderMinEl, totalOrderMaxEl } = useSelector(
    (state) => state.pagination
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders({ userID }));
  }, [totalOrderMinEl, totalOrderMaxEl]);

  useEffect(() => {
    setFilteredOrders(
      reversedOrders?.filter(
        (order, index) => index >= totalOrderMinEl && index <= totalOrderMaxEl
      )
    );
  }, [totalOrderMaxEl, totalOrderMinEl, orders]);

  const width = calcScreenWidth();

  const OrderMobile = () => {
    return (
      <div className="flex flex-col mx-4 gap-10">
        {filteredOrders?.map((order) => {
          const { order_number, order_status, order_date, total } = order;
          const formattedDate = formatDate(order_date);

          return (
            <div
              key={order.id}
              className="grid grid-cols-2 gap-y-6 py-6 border-b border-gray "
            >
              <div>Order Number</div>
              <div className="text-right">{order_number}</div>
              <div>Date</div>
              <div className="text-right">{formattedDate}</div>
              <div>Status</div>
              <div className="text-right">{order_status}</div>
              <div>Total</div>
              <div className="text-right">$ {total}</div>
              <div>Actions</div>
              <NavLink
                to={`/order_details/${order_number}`}
                className="text-right  text-accent"
              >
                View Order
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      {!orders.length ? (
        <div className="flex xs:mx-4 xs:flex-col gap-2 justify-between px-10 py-5 xs:py-2 xs:px-4 sm:py-2 sm:px-4 md:mx-4 bg-light_gray border-t-2 border-accent">
          <p className="heading5D">No orders has been made yet</p>
          <NavLink to="/catalog" className="uppercase body_large text-accent">
            Browse product
          </NavLink>
        </div>
      ) : width > 976 ? (
        <div>
          <div className="overflow-y-hidden mb-10 lg:mx-4">
            <div className="grid grid-cols-5 uppercase mt-9 pb-4 border-b">
              <div>Order number</div>
              <div>Date</div>
              <div>Status</div>
              <div>Total</div>
              <div>Actions</div>
            </div>
            {filteredOrders?.map((order) => {
              const { order_number, order_status, order_date, total } = order;
              const formattedDate = formatDate(order_date);

              return (
                <div
                  key={order.id}
                  className="grid grid-cols-5 py-6 border-b border-gray text-dark_gray"
                >
                  <div>{order_number}</div>
                  <div>{formattedDate}</div>
                  <div>{order_status}</div>
                  <div>$ {total}</div>
                  <div className="body_large text-accent flex gap-2">
                    <NavLink to={`/order_details/${order_number}`}>
                      View Order
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
          <OrdersPagination count={orders?.length} />
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          <OrderMobile />
          <OrdersPagination count={orders?.length} />
        </div>
      )}
    </div>
  );
};

export default Orders;
