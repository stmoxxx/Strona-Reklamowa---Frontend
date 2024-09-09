import React from 'react';
import Services from "../LandingPage/LandingComponents/Services/Services";
import myRoutePages from "../../Pages/RoutePages/RoutePages.module.css"

const ServicesPage = () => {
    return (
        <div>
            <h1 className={myRoutePages.title}>Our Services</h1>
            <Services/>
        </div>
    );
};

export default ServicesPage;