import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import Post from "@/pages/Post";
import Cart from "@/pages/Cart";
import About from "@/pages/About";
import Orders from "@/pages/Orders";
import Logout from "@/pages/Logout";
import Catalog from "@/pages/Catalog";
import Account from "@/pages/Account";
import PageNotFound from "@/pages/404";
import ContactUs from "@/pages/ContactUs";
import Addresses from "@/pages/Addresses";
import Dashboard from "@/pages/Dashboard";
import ProductPage from "@/pages/ProductPage";
import OrderDetails from "@/pages/OrderDetails";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import AccountDetails from "@/pages/AccountDetails";
import Search from "@/pages/Search";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/catalog", element: <Catalog /> },
  { path: "/products/:item", element: <ProductPage /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:post", element: <Post /> },
  { path: "/privacy", element: <PrivacyPolicy /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <PageNotFound /> },

  {
    path: "/account",
    element: <Account />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "addresses",
        element: <Addresses />,
      },
      {
        path: "details",
        element: <AccountDetails />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },

  { path: "/cart", element: <Cart /> },
  { path: "/order_details/:order_number", element: <OrderDetails /> },
  { path: "/search", element: <Search /> },
]);

export default router;
