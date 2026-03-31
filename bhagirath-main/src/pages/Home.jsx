import React from "react";
import HeroCarousel from "../components/sections/HeroCarousel";
import AboutSnapshot from "../components/sections/AboutSnapshot";
import ProjectsSection from "../components/sections/ProjectsSection";
import WhyUs from "../components/sections/WhyUs";
import Testimonials from "../components/sections/Testimonials";
import ContactCTA from "../components/sections/ContactCTA";

const Home = () => {
  return (
    <>
      <HeroCarousel variant="home" />
      <AboutSnapshot />
      <ProjectsSection />
      <WhyUs />
      <Testimonials />
      <ContactCTA />
    </>
  );
};

export default Home;
