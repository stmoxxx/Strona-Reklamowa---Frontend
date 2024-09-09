import React from 'react';
import myRoutePages from "./RoutePages.module.css";
import Onas from "../LandingPage/LandingComponents/Onas/Onas";

const AboutUsPage = () => {
    return (
        <div>
            <h1 className={myRoutePages.title}>About us</h1>
            <Onas/>
        </div>
    );
};

export default AboutUsPage;