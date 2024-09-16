import React from "react";
import "./home.css";
import image from "./my photo.jpg";

function Home () {
    return (
        <div id="#home">
        <h1 className="nam"> Hello I am <span className="u">Ushree Das!</span></h1>
        <img src={image} alt="" className="mine"/>
        </div>

    )
}
export default Home;