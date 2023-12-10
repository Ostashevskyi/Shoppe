import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";
import Catalog from "@/pages/Catalog";
import ContactUs from "@/pages/ContactUs";
import ProductPage from "@/pages/ProductPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/catalog", element: <Catalog /> },
  { path: "/products/:item", element: <ProductPage /> },
  { path: "/contact-us", element: <ContactUs /> },
]);

export default router;
