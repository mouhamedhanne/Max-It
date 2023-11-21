import React from "react";
import Header from "../components/Header";
import OperationsArea from "../components/OperationsArea";
import SargalPoint from "../components/SargalPoint";
//max-w-2xl h-full

export default function HomePage() {
  return (
    <div className="px-4 relative">
      <Header />
      <OperationsArea />
      <div className="absolute w-[92%] top-[20rem] ">
        <SargalPoint />
      </div>
    </div>
  );
}
