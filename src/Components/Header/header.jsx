import React from "react";
import "./header.css";
import pdf from "./Ushree_Das_resume.pdf";



function Header () {
    
    return (
        <div className="header">
            <p1 className="ussu">Ussu</p1>
            <div className="info">
<a href="#home" className="ab">Home</a>
<a href="#about" className="ab">About</a>
<a href="#projects" className="ab">Projects</a>
<a href="#call" className="ab">Contact</a>
<button  className="cv">
  <a href={pdf} download="pdf" className="load"> 

  Download CV
  </a>
  
   </button>
</div>
        </div>

    )
}
export default Header;