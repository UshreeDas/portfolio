import React from "react";
import "./footer.css";
import linkedin from "./Vector.png";
import github from "./Vector (3).png";
import twitter from "./Vector (2).png";


function Footer () {
    return (
        <div className="footer">

           <section className="log">
            <p className="l">Designed & build by <span className="s">Ushree</span></p>
           <a href="#home" target="_blank" className="cont" >
            Home
            </a>
            <a href="https://github.com/UshreeDas" target="_blank" className="pi" >
            <img src={github} alt="" className="logo"/>
            </a>
            <a href="https://www.linkedin.com/in/ushree-das-03593a27a?utm_source=share&utm_campaign=share_via&utm_
            content=profile&utm_medium=android_app" target="_blank" className="pi"  >
            <img src={linkedin} alt="" className="logo"/>
            </a>
            <a href="https://x.com/UshreeDas?t=nUozQ8YaKjfir839v_gYtQ&s=09" target="_blank" className="pi" >
            <img src={twitter} alt="" className="logo"/>
            </a>
            </section>
    <p className="copy">
        Copyright &copy; 2024 Ushree Das
    </p>
        </div>

    )
}
export default Footer;