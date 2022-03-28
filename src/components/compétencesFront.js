import React from "react";
import "../styles/skillsBlock.css";
import frontendpic from "../assets/front-end.jpg";

function SkillsFront() {
    return (
        <div id="competences/1" className="front-Block">
            <img alt="dev-front" src={frontendpic}></img>
            <h1> FRONT-END</h1>
            <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
            </h3>
        </div>
    );
}
export default SkillsFront;
