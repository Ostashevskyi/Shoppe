import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";
import Catalog from "@/pages/Catalog";
import ContactUs from "@/pages/ContactUs";
import ProductPage from "@/pages/ProductPage";
import Login from "@/pages/Login";
import ForgotPassword from "@/pages/ForgotPassword";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/catalog", element: <Catalog /> },
  { path: "/products/:item", element: <ProductPage /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/login", element: <Login /> },
  { path: "/reset-password", element: <ForgotPassword /> },
]);

export default router;
