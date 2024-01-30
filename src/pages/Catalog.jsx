import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import useFilteredProducts from "@/hooks/useFilteredProducts";

import { setCatalogTitle, setCatalogCategory } from "@/store/filterSlice";

import { calcScreenWidth } from "@/utils/calcScreenWidth";

import Wrapper from "@/components/Wrapper";
import FilterIcon from "@/components/icons/FilterIcon";
import ProductCard from "@/components/Cards/ProductCard";
import RangeSlider from "@/components/shared/RangeSlider";
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCatalogCategory(""));
    dispatch(setCatalogTitle(""));
  }, []);

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
      <div className="xs:mx-4">
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
      <div className="mt-24 xs:mt-4 sm:mt-4 md:mt-4 flex gap-9 mb-60 xs:flex-col sm:flex-col md:flex-col xs:mb xs:mb-20 sm:mb-20 sm:mx-4 md:mx-4 lg:mx-4">
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
              <p className="heading3D mb-4 font-medium xs:mx-4">Shop</p>
              <MobileFilter />
              {filterIsOpen && (
                <div className="flex flex-col mt-10 xs:mx-4">
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

        <main className="flex flex-wrap justify-between xs:gap-5 xs:justify-center ">
          {allProducts?.map((el, index) => {
            return <ProductCard product={el} key={index} small />;
          })}
        </main>
      </div>
    </Wrapper>
  );
};

export default Catalog;
