import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import useSearchAll from "@/hooks/useSearchAll";

import Wrapper from "@/components/Wrapper";
import PostCard from "@/components/Cards/PostCard";
import ProductCard from "@/components/Cards/ProductCard";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search"));
  const { refetch } = useSearchAll({ title: search });

  const handleChange = (e) => {
    setSearch(e.target.value);

    searchParams.set("search", e.target.value);

    if (!searchParams.get("search")) {
      searchParams.delete("search");
    }

    setSearchParams(searchParams);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await refetch({
          title: searchParams.get("search") ? searchParams.get("search") : "",
        });

        const { allPosts, allProducts } = data;
        setSearchResults([...allPosts, ...allProducts]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [refetch, searchParams]);

  const postRecords = searchResults.filter(
    (el) => el.__typename === "PostRecord"
  );

  const productRecords = searchResults.filter(
    (el) => el.__typename === "ProductRecord"
  );

  return (
    <Wrapper>
      <main className="my-20 xs:mx-4 sm:mx-4 md:mx-4 xs:my-6 sm:my-6 md:my-6">
        <div className="mb-6 ">
          <input
            className="w-full border-b border-light_gray rounded-md py-5 px-2 focus:outline-none"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {searchParams.get("search") && (
          <div className="flex gap-10 flex-col ">
            {postRecords.length ? (
              <div>
                <p className="heading2D mb-10">Posts ({postRecords.length}):</p>
                <div className="flex flex-wrap gap-6">
                  {postRecords.map((el) => (
                    <PostCard post={el} />
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}

            {productRecords.length ? (
              <>
                <p className="heading2D">
                  Products ({productRecords.length}):{" "}
                </p>
                <div className="flex gap-10 md:gap-9 xs:gap-1.5 sm:gap-8 flex-wrap ">
                  {productRecords.map((el) => (
                    <ProductCard product={el} />
                  ))}
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        )}
      </main>
    </Wrapper>
  );
};

export default Search;
