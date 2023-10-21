import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";
import Carousels from "./Carousel/Carousel";
import Categories from "./Categories/Categories";
import ProductList from "./Product/ListProduct";
import SlideShow from "./Explore/ListImage";
const Home = () => {
  return (
    <Layout>
      {/* <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div> */}
      <Carousels/>
      <Categories/>
      <ProductList/>
      {/* <SlideShow/> */}
    </Layout>
  );
};

export default Home;
