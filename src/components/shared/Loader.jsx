import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return <RotatingLines visible={true} strokeColor="#8e9c8e" width="30" />;
};

export default Loader;
