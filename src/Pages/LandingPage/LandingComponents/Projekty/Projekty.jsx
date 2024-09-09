import React from "react";
import myProjekty from "../Projekty/Projekty.module.css";
import ProjectsSlider from "./ProjectsSlider";

const Projekty = () => {

    return (
        <div className={"container"}>
            <div className={myProjekty.background}>
                <div className={myProjekty.title}>Projekty</div>
                <ProjectsSlider/>
            </div>
        </div>

    );
};

export default Projekty;