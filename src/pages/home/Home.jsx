import React from "react";
import Header from "@/components/Header";
import useImage from "../../hooks/useImage";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  return (
    <div className="max-w-[1248px] m-auto">
      <Header />
      <ProductCard />
    </div>
  );
};

export default Home;
