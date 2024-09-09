import React from 'react';
import myRoutePages from "./RoutePages.module.css";
import Projekty from "../LandingPage/LandingComponents/Projekty/Projekty";

const ProjectsPage = () => {
    return (
        <div>
            <h1 className={myRoutePages.title}>Our Projects</h1>
            <Projekty/>
        </div>
    );
};

export default ProjectsPage;