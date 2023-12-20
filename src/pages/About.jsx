import React from "react";
import Wrapper from "@/components/Wrapper";
import useAboutInfo from "../hooks/useAboutInfo";
import parse from "html-react-parser";

const About = () => {
  const { data } = useAboutInfo();
  const aboutPage = data?.aboutPage;

  return (
    <Wrapper>
      <main className="max-w-[670px] m-auto mt-24 mb-60">
        <section className="text-center child-h1:heading1D mb-11">
          <p className="heading1D mb-6">About</p>
          <p className="heading3D">Who we are and why we do what we do!</p>
        </section>
        <section
          className="child-h4:text-2xl child-h4:font-medium
        child-p:text-base
        child-ul:list-disc child-ul:list-inside child-ul:ml-3"
        >
          {parse(aboutPage?.about ? aboutPage?.about : "")}
        </section>
      </main>
    </Wrapper>
  );
};

export default About;
