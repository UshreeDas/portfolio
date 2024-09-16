import React from "react";
import "./header.css";

const PDF_FILE_URL="http://localhost:3000/#home/Ushree_Das_resume.pdf";

function Header () {
    const downloadFileAtURL=(url)=>{
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href=url;
        aTag.setAttribute("download",fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();

    };
    return (
        <div className="header">
            <p1 className="ussu">Ussu</p1>
            <div className="info">
<a href="#home" className="ab">Home</a>
<a href="#about" className="ab">About</a>
<a href="#projects" className="ab">Projects</a>
<a href="#call" className="ab">Contact</a>
<button onClick={()=>{downloadFileAtURL (PDF_FILE_URL)}} className="cv">Download CV</button>
</div>
        </div>

    )
}
export default Header;