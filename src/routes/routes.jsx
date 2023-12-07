import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Catalog from "@/pages/Catalog";
import ProductPage from "../pages/ProductPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/catalog", element: <Catalog /> },
  { path: "/products/:item", element: <ProductPage /> },
]);

export default router;
