import React, { useEffect, useState, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";

import usePosts from "@/hooks/usePosts";

import { setBlogCategory } from "@/store/filterSlice";

import { POSTS_ON_PAGE } from "@/utils/constants";

import Wrapper from "@/components/Wrapper";
import PostCard from "@/components/Cards/PostCard";
import { SearchInput } from "@/components/Inputs/SearchInput";
import BlogPagination from "@/components/Paginations/BlogPagination";
import { useSearchParams } from "react-router-dom";

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

  useEffect(() => {
    setSearchParams();
    dispatch(setBlogCategory(""));
    setActiveBtn("");
  }, []);

  const handleClick = (e) => {
    searchParams.set("category", e.target.innerHTML);
    setSearchParams(searchParams);

    dispatch(setBlogCategory(e.target.innerHTML));

    activeBtn === e.target.name
      ? setActiveBtn("")
      : setActiveBtn(e.target.name);
  };

  const NotFoundMessage = useMemo(() => {
    return (
      <div className="flex flex-col items-center justify-center gap-10">
        <p>Ooops</p>
        <p>Seems like we didn't found any items</p>
      </div>
    );
  }, []);

  return (
    <Wrapper>
      <div className="mt-24 ">
        <p className="mb-9 heading1D">Blog</p>
        <div className={`flex ${!allPosts?.length && "gap-96"} gap-10`}>
          <aside>
            <SearchInput />
            <p className="mt-14 mb-5 heading4D">Categories</p>
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
          </aside>
          <main className="mb-60 ">
            <div className="flex flex-wrap gap-12 mb-16">
              {allPosts?.map((post, index) => {
                return <PostCard key={index} post={post} />;
              })}
            </div>
            {allPosts?.length === 0 && NotFoundMessage}
            <BlogPagination
              count={
                blogCategory || blogTitle ? allPosts?.length : countOfPosts
              }
            />
          </main>
        </div>
      </div>
    </Wrapper>
  );
};

export default Blog;
