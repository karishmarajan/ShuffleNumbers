import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="home-div">
      <Header />
      <div className="link-style">
        <Link style={{ padding: 20 }} to="/shuffleClass">
          Using Class Component
        </Link>
        <Link style={{ padding: 20 }} to="/shuffleFunction">
          Using Function Component
        </Link>
        <Link style={{ padding: 20 }} to="/typescript">
          Using Typescript
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
