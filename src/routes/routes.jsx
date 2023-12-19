import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import Login from "@/pages/Login";
import Catalog from "@/pages/Catalog";
import ContactUs from "@/pages/ContactUs";
import ProductPage from "@/pages/ProductPage";
import ForgotPassword from "@/pages/ForgotPassword";
import Post from "../pages/Post";
import PrivacyPolicy from "../pages/PrivacyPolicy";

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
]);

export default router;
