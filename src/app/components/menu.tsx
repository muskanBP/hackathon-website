"use client"
import React from "react";
import FeaturedProducts from "../components/featuredproduct";
import LatestProducts from "../components/latestproduct";
import Add from "./add";
import TrendingProducts from "./TrendingProducts";
import DiscountItem from "./DiscountItem";
import Newsletter from "./Newsletter";

const menu = () => {
  return (
    <div>
      <FeaturedProducts />
      <LatestProducts />
     <Add />
     <TrendingProducts /> {/* Added TrendingProducts here */}
     <DiscountItem />
     <Newsletter />

    
    </div>
  );
};

export default menu;
