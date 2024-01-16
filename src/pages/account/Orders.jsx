import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useUserID } from "@/hooks/useUserID";
import { getOrders } from "@/store/orderSlice";
import OrdersPagination from "@/components/Paginations/OrdersPagination";
import { format } from "date-fns";

const Orders = () => {
  const { user } = useAuth0();
  const userID = useUserID(user);

  const [filteredOrders, setFilteredOrders] = useState();

  const { orders } = useSelector((state) => state.orders);

  const { totalOrderMinEl, totalOrderMaxEl } = useSelector(
    (state) => state.pagination
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders({ userID }));
  }, [totalOrderMinEl, totalOrderMaxEl]);

  useEffect(() => {
    setFilteredOrders(
      orders?.filter(
        (order, index) => index >= totalOrderMinEl && index <= totalOrderMaxEl
      )
    );
  }, [totalOrderMaxEl, totalOrderMinEl, orders]);

  return (
    <div>
      {!orders.length ? (
        <div className="flex items-center justify-between px-10 py-5 bg-light_gray border-t-2 border-accent">
          <p className="heading5D">No orders has been made yet</p>
          <NavLink to="/catalog" className="uppercase body_large text-accent">
            Browse product
          </NavLink>
        </div>
      ) : (
        <div>
          <div className=" overflow-y-hidden mb-10 ">
            <div className="grid grid-cols-5 uppercase mt-9 pb-4 border-b">
              <div>Order number</div>
              <div>Date</div>
              <div>Status</div>
              <div>Total</div>
              <div>Actions</div>
            </div>
            {filteredOrders?.map((order) => {
              const formattedDate = format(
                new Date(order.order_date),
                "MMMM d,yyyy"
              );

              return (
                <div
                  key={order.id}
                  className="grid grid-cols-5  py-6 border-b border-gray text-dark_gray"
                >
                  <div>{order.order_number}</div>
                  <div>{formattedDate}</div>
                  <div>{order.order_status}</div>
                  <div>$ {order.total}</div>
                  <div className="body_large text-accent flex gap-2">
                    <NavLink to={"/order_details"}>View Order</NavLink>
                    <p>|</p>
                    <NavLink>Download</NavLink>
                  </div>
                </div>
              );
            })}
          </div>
          <OrdersPagination count={orders?.length} />
        </div>
      )}
    </div>
  );
};

export default Orders;
