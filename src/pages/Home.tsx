import { View, Text } from "react-native";
import React from "react";
import HomeTopNav from "../components/HomeTopNav";
import SearchBar from "../components/SearchBar";
import HomeNews from "../components/HomeNews";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <View style={{ height: "100%" }}>
      <HomeTopNav />
      <SearchBar />
      <HomeNews />
      <ProductList />
    </View>
  );
};

export default Home;
