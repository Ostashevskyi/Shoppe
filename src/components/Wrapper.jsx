import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Wrapper = ({ children }) => {
  return (
    <main className="center bg-backgroud  flex flex-col">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Wrapper;
