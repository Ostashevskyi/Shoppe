import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import Wrapper from "@/components/Wrapper";

import useFilteredProducts from "@/hooks/useFilteredProducts";

import RangeSlider from "@/components/shared/RangeSlider";
import ProductCard from "@/components/Cards/ProductCard";
import { ToggleCatalog } from "@/components/shared/Toggle";
import { SearchInput } from "@/components/Inputs/SearchInput";
import { CatalogSelect } from "@/components/Selects/CatalogSelect";
import { calcScreenWidth } from "../utils/calcScreenWidth";
import FilterIcon from "../components/icons/FilterIcon";

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

  const width = calcScreenWidth();
  const [filterIsOpen, setFilterIsOpen] = useState(false);

  const MobileFilter = () => {
    return (
      <div>
        <button
          className="flex gap-2 items-center"
          onClick={() => setFilterIsOpen(!filterIsOpen)}
        >
          <FilterIcon />
          <p>Filters</p>
        </button>
      </div>
    );
  };

  return (
    <Wrapper>
      <div className="mt-24 flex gap-9 mb-60 xs:flex-col sm:flex-col md:flex-col xs:mx-4 xs:mb xs:mb-20 sm:mb-20 sm:mx-4 md:mx-4 lg:mx-4">
        <aside>
          {width > 768 ? (
            <>
              <p className="heading1D mb-9">Shop The Latest</p>
              <SearchInput type="catalog" />
              <CatalogSelect />
              <RangeSlider />
              <ToggleCatalog label="On sale" />
              <ToggleCatalog label="In stock" />
            </>
          ) : (
            <>
              <MobileFilter />
              {filterIsOpen && (
                <div className="flex flex-col mt-10">
                  <SearchInput type="catalog" />
                  <CatalogSelect />
                  <RangeSlider />
                  <ToggleCatalog label="On sale" />
                  <ToggleCatalog label="In stock" />
                </div>
              )}
            </>
          )}
        </aside>

        <main className="flex flex-wrap justify-between ">
          {allProducts?.map((el, index) => {
            return <ProductCard product={el} key={index} small />;
          })}
        </main>
      </div>
    </Wrapper>
  );
};

export default Catalog;
