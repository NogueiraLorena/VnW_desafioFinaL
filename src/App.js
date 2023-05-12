import React from "react";
import "./index.css";

import Header from "./components/header/header";
import Main from "./components/main/main";

import CarouselComponent from "./components/carousel/carousel";
import Filmes from "./components/filmes/filmes";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <CarouselComponent />

      <Filmes />

      <Footer />
    </>
  );
}
