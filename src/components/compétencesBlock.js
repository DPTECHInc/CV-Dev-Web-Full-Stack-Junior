import React from "react";
import SkillsFront from "./compétencesFront";
import SkillsBack from "./compétencesBack";
import SkillsMobile from "./compétencesMobile";
import SkillsWorkSpace from "./compétencesWorkSpace";

function SkillsBlock() {
    return (
        <>
            <SkillsFront />
            <SkillsBack />
            <SkillsMobile />
            <SkillsWorkSpace />
        </>
    );
}
export default SkillsBlock;
