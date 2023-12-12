import React from "react";
import Wrapper from "@/components/Wrapper";
import { SearchInput } from "../components/Input";
import usePosts from "../hooks/usePosts";
import PostCard from "../components/PostCard";

const Blog = () => {
  const { data } = usePosts();

  const allPosts = data?.allPosts;

  return (
    <Wrapper>
      <div className="mt-24 ">
        <p className="mb-9 heading1D">Blog</p>
        <div className="flex gap-10">
          <aside>
            <SearchInput />
            <p className="mt-14 mb-5 heading4D">Categories</p>
            <ul className="flex flex-col gap-2 text-dark_gray">
              <li>
                <button>Fashion</button>
              </li>
              <li>
                <button>Style</button>
              </li>
              <li>
                <button>Accessories</button>
              </li>
              <li>
                <button>Season</button>
              </li>
            </ul>
          </aside>
          <main>
            {allPosts?.map((post, index) => {
              return <PostCard key={index} post={post} />;
            })}
          </main>
        </div>
      </div>
    </Wrapper>
  );
};

export default Blog;
