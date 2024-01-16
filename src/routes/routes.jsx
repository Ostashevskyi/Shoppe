import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import Post from "@/pages/Post";
import Cart from "@/pages/Cart";
import Login from "@/pages/Login";
import About from "@/pages/About";
import Catalog from "@/pages/Catalog";
import PageNotFound from "@/pages/404";
import ContactUs from "@/pages/ContactUs";
import ProductPage from "@/pages/ProductPage";
import Account from "@/pages/account/Account";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import ForgotPassword from "@/pages/ForgotPassword";
import OrderDetails from "../pages/OrderDetails";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/catalog", element: <Catalog /> },
  { path: "/products/:item", element: <ProductPage /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/login", element: <Login /> },
  { path: "/reset-password", element: <ForgotPassword /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:post", element: <Post /> },
  { path: "/privacy", element: <PrivacyPolicy /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <PageNotFound /> },
  { path: "/account", element: <Account /> },
  { path: "/cart", element: <Cart /> },
  { path: "/order_details/:order_number", element: <OrderDetails /> },
]);

export default router;
