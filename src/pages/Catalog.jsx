import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import Wrapper from "@/components/Wrapper";

import useFilteredProducts from "@/hooks/useFilteredProducts";

import RangeSlider from "@/components/shared/RangeSlider";
import ProductCard from "@/components/Cards/ProductCard";
import { ToggleCatalog } from "@/components/shared/Toggle";
import { SearchInput } from "@/components/Inputs/SearchInput";
import { CatalogSelect } from "@/components/Selects/CatalogSelect";

const Catalog = () => {
  const { catalogCategory, minPrice, maxPrice, onSale, inStock, catalogTitle } =
    useSelector((state) => state.filter);

  const { refetch } = useFilteredProducts({
    type: catalogCategory,
    min: minPrice,
    max: maxPrice,
    sale: onSale,
    stock: inStock,
    title: catalogTitle,
  });

  const [allProducts, setAllProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await refetch({
          type: catalogCategory ? catalogCategory : undefined,
          min: minPrice,
          max: maxPrice,
          sale: onSale,
          stock: inStock,
          title: catalogTitle ? catalogTitle : "",
        });

        setAllProducts(data?.allProducts || []);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [
    catalogCategory,
    minPrice,
    maxPrice,
    onSale,
    inStock,
    refetch,
    catalogTitle,
  ]);

  return (
    <Wrapper>
      <div className="mt-24 flex gap-9 mb-60">
        <aside>
          <p className="heading1D mb-9">Shop The Latest</p>
          <SearchInput type="catalog" />
          <CatalogSelect />
          <RangeSlider />
          <ToggleCatalog label="On sale" />
          <ToggleCatalog label="In stock" />
        </aside>

        <main className="flex flex-wrap gap-5">
          {allProducts?.map((el, index) => {
            return (
              <div key={index}>
                <ProductCard product={el} small />
              </div>
            );
          })}
        </main>
      </div>
    </Wrapper>
  );
};

export default Catalog;
