import React from 'react';
import myRoutePages from "./RoutePages.module.css";
import ContactUs from "../LandingPage/LandingComponents/ContactUs/ContactUs";

const ContactUsPage = () => {
    return (
        <div>
            <h1 className={myRoutePages.title}>Contact us!</h1>
            <ContactUs/>
        </div>
    );
};

export default ContactUsPage;