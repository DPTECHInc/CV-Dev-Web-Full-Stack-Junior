import React from "react";
import "../styles/home.css";
import Experiences from "./Experiences";
import Contact from "./Contact";
import SkillsBlock from "./compétencesBlock";

function Home() {
    return (
        <div id="/" className="Home">
            <div className="HomeText">
                <h1 className="Text1">Bonjour,</h1>
                <h3 className="Text2">Dayle PARENT</h3>
                <h4 className="Text3">Je suis développeur Web full-stack Junior</h4>
                <h5 className="Text4">
                    Je suis à la recherche d'une première expérience dans le domaine du développement Web
                </h5>
                <SkillsBlock />
                <Experiences />
                <Contact />
            </div>
        </div>
    );
}

export default Home;
