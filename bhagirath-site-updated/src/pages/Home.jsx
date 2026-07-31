import React from "react";
import HeroCarousel from "../components/sections/HeroCarousel";
import AboutSnapshot from "../components/sections/AboutSnapshot";
import BrandFilm from "../components/sections/BrandFilm";
import ProjectsSection from "../components/sections/ProjectsSection";
import WhyUs from "../components/sections/WhyUs";
// import Testimonials from "../components/sections/Testimonials";
import ContactCTA from "../components/sections/ContactCTA";

const Home = () => {
  return (
    <>
      <HeroCarousel variant="home" />
      <AboutSnapshot />
      <BrandFilm />
      <ProjectsSection />
      <WhyUs />
      {/* <Testimonials /> */}
      <ContactCTA />
    </>
  );
};

export default Home;
