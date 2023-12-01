import React from "react";

import useSliderImages from "@/hooks/useSliderImages";

import Header from "@/components/Header";
import Slider from "@/components/Slider";

const Home = () => {
  const sliderImages = useSliderImages();
  const { data } = sliderImages;

  return (
    <div className="max-w-[1248px] m-auto">
      <Header />
      <Slider data={data?.allUploads} />
    </div>
  );
};

export default Home;
