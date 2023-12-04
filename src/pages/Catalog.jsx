import React from "react";
import Wrapper from "../components/Wrapper";
import { SearchInput } from "../components/Input";
import Dropdown from "../components/Dropdown";
import RangeSlider from "../components/RangeSlider";
import ToggleInput from "../components/Toggle";
import useProducts from "../hooks/useProducts";
import ProductCard from "@/components/ProductCard";

const Catalog = () => {
  const { data } = useProducts();
  const allProducts = data?.allProducts;

  return (
    <Wrapper>
      <div className="mt-24 flex gap-9 mb-60">
        <aside>
          <p className="heading1D mb-9">Shop The Latest</p>
          <SearchInput />
          <Dropdown />
          <RangeSlider />
          <ToggleInput label="On sale" />
          <ToggleInput label="In stock" />
        </aside>

        <main className="flex flex-wrap gap-5">
          {allProducts?.map((el, index) => {
            return (
              <div key={index}>
                <ProductCard product={el} small />;
              </div>
            );
          })}
        </main>
      </div>
    </Wrapper>
  );
};

export default Catalog;
