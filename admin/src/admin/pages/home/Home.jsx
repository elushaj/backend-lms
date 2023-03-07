import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/SideBar";
import Widget from "../../components/widgets/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import "./home.scss";
import SearchWidget from "../../components/search/SearchWidget";
const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
        <Widget  />
      
       
        </div>
        <div className="charts">
      
<SearchWidget/>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
