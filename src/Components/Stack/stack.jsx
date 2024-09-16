import React from "react";
import "./stack.css";
import vs from "./vscode.svg";
import gi from "./akar-icons_github-fill.png";
import ht from "./html.svg";
import js from "./js.svg";
import cs from "./css.svg";
import re from "./react.svg";
import bo from "./bootstrap.svg";
import node from "./image 3.png";
import c from "./image 2.png";
import rec from "./Rectangle 1.png";
import ca from "./Group 5.png";




function Stack () {
    return (
        <div className="stack">
        <h2 className="pv">Tech Stack</h2>
        <section className="one">

        <a href="" target="_blank" className="st" >
        <img src={ht} alt="" className="tech"/>
            </a>
            <a href="" target="_blank" className="st" >
            <img src={cs} alt="" className="tech"/>
            </a>
            <a href="" target="_blank" className="st" >
            <img src={js} alt="" className="tech"/>
            </a>
            <a href="" target="_blank" className="st" >
            <img src={re} alt="" className="tech"/>
            </a>
            <a href="" target="_blank" className="st">
            <img src={gi} alt="" className="tech"/>
            </a>
            <a href="" target="_blank"  className="st">
            <img src={vs} alt="" className="tech"/>
            </a>
            </section>

            <section className="two">

        <a href="" target="_blank" className="st" >
        <img src={bo} alt="" className="tech"/>
            </a>
            <a href="" target="_blank" className="st" >
            <img src={node} alt="" className="tech"/>
            </a>
            <a href="" target="_blank" className="st" >
            <img src={c} alt="" className="tech"/>
            </a>
            <a href="" target="_blank"  className="st">
            <img src={rec} alt="" className="tech"/>
            </a>
            <a href="" target="_blank"className="st" >
            <img src={ca} alt="" className="tech"/>
            </a>
            
            </section>
        </div>

    )
}
export default Stack;