import React from "react";
import AboutStyle from "./About.module.css"
import { useNavigate } from 'react-router-dom';





const About = () => {
    const navigate = useNavigate();

    const backToHome = () => navigate("/home");

 return (<div>
    <button className={AboutStyle.button} onClick={backToHome}>Back to home</button>
    <br></br>
    <div className={AboutStyle.containerSemi}> <h1 className={AboutStyle.infoH1}>Texto de prueba</h1> </div>
</div>
 );
    
}

export default About;