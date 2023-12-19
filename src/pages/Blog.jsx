import React, { useEffect, useState, useM, useMemo } from "react";
import Wrapper from "@/components/Wrapper";
import { SearchInput } from "../components/Input";
import usePosts from "../hooks/usePosts";
import PostCard from "../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { setFilterType } from "../store/filterSlice";
import Pagination from "../components/Pagination";
import { POSTS_ON_PAGE } from "../utils/constants";

const Blog = () => {
  const { title, filterType } = useSelector((state) => state.filter);
  const { totalSkip } = useSelector((state) => state.pagination);
  const [allPosts, setAllPosts] = useState();
  const [countOfPosts, setCountOfPosts] = useState();
  const dispatch = useDispatch();

  const { refetch } = usePosts({
    category: filterType,
    title: title,
    first: POSTS_ON_PAGE,
    skip: totalSkip,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await refetch({
          title: title ? title : "",
          category: filterType ? filterType : undefined,
          first: POSTS_ON_PAGE,
          skip: totalSkip,
        });

        setAllPosts(data?.allPosts || []);
        setCountOfPosts(data?._allPostsMeta?.count);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [filterType, title, refetch, totalSkip]);

  const [activeBtn, setActiveBtn] = useState();

  const handleClick = (e) => {
    dispatch(setFilterType(e.target.innerHTML));

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
            <Pagination
              count={filterType || title ? allPosts?.length : countOfPosts}
            />
          </main>
        </div>
      </div>
    </Wrapper>
  );
};

export default Blog;
