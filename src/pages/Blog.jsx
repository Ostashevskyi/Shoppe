import React, { useEffect, useState, useMemo } from "react";

import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import usePosts from "@/hooks/usePosts";

import { setBlogCategory, setBlogTitle } from "@/store/filterSlice";

import { POSTS_ON_PAGE } from "@/utils/constants";
import { calcScreenWidth } from "@/utils/calcScreenWidth";

import Wrapper from "@/components/Wrapper";
import PostCard from "@/components/Cards/PostCard";
import FilterIcon from "@/components/icons/FilterIcon";
import { SearchInput } from "@/components/Inputs/SearchInput";
import BlogPagination from "@/components/Paginations/BlogPagination";

const Blog = () => {
  const { blogTitle, blogCategory } = useSelector((state) => state.filter);
  const { totalBlogSkip } = useSelector((state) => state.pagination);
  const [allPosts, setAllPosts] = useState();
  const [countOfPosts, setCountOfPosts] = useState();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeBtn, setActiveBtn] = useState();

  const { refetch } = usePosts({
    category: blogCategory,
    title: blogTitle,
    first: POSTS_ON_PAGE,
    skip: totalBlogSkip,
  });

  useEffect(() => {
    setSearchParams();
    dispatch(setBlogCategory(""));
    dispatch(setBlogTitle(""));
    setActiveBtn("");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await refetch({
          title: blogTitle ? blogTitle : "",
          category: blogCategory ? blogCategory : undefined,
          first: POSTS_ON_PAGE,
          skip: totalBlogSkip,
        });

        setAllPosts(data?.allPosts || []);
        setCountOfPosts(data?._allPostsMeta?.count);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [blogCategory, blogTitle, refetch, totalBlogSkip]);

  const handleClick = (e) => {
    if (searchParams.has("category")) {
      searchParams.delete("category");
    } else {
      searchParams.set("category", e.target.innerHTML);
    }

    setSearchParams(searchParams);

    dispatch(setBlogCategory(e.target.innerHTML));

    activeBtn === e.target.name
      ? setActiveBtn("")
      : setActiveBtn(e.target.name);
  };

  const NotFoundMessage = useMemo(() => {
    return (
      <div className="flex flex-col items-center justify-center gap-10 text-text">
        <p>Ooops</p>
        <p>Seems like we didn't found any items</p>
      </div>
    );
  }, []);

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
          <p className="text-text">Filters</p>
        </button>
      </div>
    );
  };

  const Categories = () => {
    return (
      <>
        <p className="mt-14 mb-5 heading4D text-text">Categories</p>
        <ul className="flex flex-col gap-2 text-dark_gray">
          <li>
            <button
              name="Fashion"
              className={`${activeBtn === "Fashion" && "text-xl"} `}
              onClick={(e) => handleClick(e)}
            >
              Fashion
            </button>
          </li>
          <li>
            <button
              name="Style"
              className={`${activeBtn === "Style" && "text-xl"} `}
              onClick={(e) => handleClick(e)}
            >
              Style
            </button>
          </li>
          <li>
            <button
              name="Accessories"
              className={`${activeBtn === "Accessories" && "text-xl"} `}
              onClick={(e) => handleClick(e)}
            >
              Accessories
            </button>
          </li>
          <li>
            <button
              name="Season"
              className={`${activeBtn === "Season" && "text-xl"} `}
              onClick={(e) => handleClick(e)}
            >
              Season
            </button>
          </li>
        </ul>
      </>
    );
  };

  return (
    <Wrapper>
      <div
        className={`flex ${
          !allPosts?.length && "gap-96"
        } gap-10 mt-24 mb-60 xs:flex-col sm:flex-col md:flex-col xs:mx-4 xs:mb xs:mb-20 sm:mb-20 sm:mx-4 md:mx-4 lg:mx-4 xs:mt-4 sm:mt-4 md:mt-4`}
      >
        <aside>
          {width > 768 ? (
            <>
              <p className="mb-9 heading1D text-text">Blog</p>
              <SearchInput />
              <Categories />
            </>
          ) : (
            <>
              <p className="heading3D mb-4 font-medium text-text">Blog</p>
              <MobileFilter />
              {filterIsOpen && (
                <div className="mt-10">
                  <SearchInput />
                  <Categories />
                </div>
              )}
            </>
          )}
        </aside>
        <main>
          <div className="flex flex-wrap xl:gap-12 xxl:gap-12 xs:justify-between sm:justify-between md:justify-between lg:justify-between mb-16">
            {allPosts?.map((post, index) => {
              return <PostCard key={index} post={post} />;
            })}
          </div>
          {allPosts?.length === 0 && NotFoundMessage}
          <BlogPagination
            count={blogCategory || blogTitle ? allPosts?.length : countOfPosts}
          />
        </main>
      </div>
    </Wrapper>
  );
};

export default Blog;
