import React from "react";
import Hero from "../components/sections/Hero";
import BrandStrip from "../components/sections/BrandStrip";
import About from "../components/sections/About";
import Amenities from "../components/sections/Amenities";
import Residences from "../components/sections/Residences";
import Gallery from "../components/sections/Gallery";
import Location from "../components/sections/Location";
import Contact from "../components/sections/Contact";

const Home = () => (
  <>
    <Hero />
    <BrandStrip />
    <About />
    <Amenities />
    <Residences />
    <Gallery />
    <Location />
    <Contact />
  </>
);

export default Home;
