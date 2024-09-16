import React from "react";
import co from "./code.png";
import pg from "./page.png";
import cl from "./cal.png";
import "./projects.css";
function ProjectItem(){
    return(
        <div className="card-project">
        <div class="card" >
        <img src={cl} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Calculator</h5>
          <p class="card-text"> I made a simple calculator using html, css & javascript.</p>
          <a href="https://ushreedas.github.io/Calculator/" class="btn btn-primary">View Project</a>
        </div>
      </div>

      <div class="card" >
        <img src={co} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Code-Craft 3.0</h5>
          <p class="card-text">I build this landing page while participating in code-craft 3.0.</p>
          <a href="https://ushreedas.github.io/CODE-CRAFT/" class="btn btn-primary">View Project</a>
        </div>
      </div>

      <div class="card" >
        <img src={pg} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">First Project</h5>
          <p class="card-text">It is my first web page which I created when I just started learning .</p>
          <a href="https://ushreedas.github.io/first-project/" class="btn btn-primary">View Project</a>
        </div>
      </div>

      </div>


    )
};
export default ProjectItem;