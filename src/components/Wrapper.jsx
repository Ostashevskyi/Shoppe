import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";

const Wrapper = ({ children }) => {
  return (
    <main className="center bg-backgroud flex flex-col">
      <Header />
      {children}
      <SpeedInsights />
      <Footer />
    </main>
  );
};

export default Wrapper;
