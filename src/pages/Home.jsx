import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Movies from "../components/Movies";

const Home = ({ topTen }) => {
  return (
    <div>
      <Header />
      <Movies topTen={topTen} />
      <Footer />
    </div>
  );
};

export default Home;
