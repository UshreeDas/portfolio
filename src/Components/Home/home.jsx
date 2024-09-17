import React from "react";
import "./home.css";
import image from "./my photo.jpg";

function Home () {
    return (
        <div id="home">
            <center>
        <h1 className="nam"> Hello I am <span className="u">Ushree Das!</span></h1></center>
        <center>
        <img src={image} alt="" className="mine"/></center>
        </div>

    )
}
export default Home;