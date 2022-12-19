import React from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Products from "../components/Products/Products"
import Funiro from "../components/Products/Funiro";

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Products />
      <Funiro />
    </main>
  );
}
export default Home;