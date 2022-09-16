import React from "react";
import Header from "../components/Header";
import HomeProjects from "../components/HomeProjects";
import Intro from "../components/Intro";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <>
      <Header />
      <Intro />
      <HomeProjects />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
