import React from "react";
import Header from "../components/Header";
import OperationsArea from "../components/OperationsArea";
//max-w-2xl h-full m-auto

export default function HomePage() {
  return (
    <div className="px-4">
      <Header />
      <OperationsArea />
    </div>
  );
}
