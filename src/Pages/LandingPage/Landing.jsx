import React from 'react';
import Presentation from "./LandingComponents/Presentation/Presentation";
import Proposals from "./LandingComponents/Proposals/Proposals";
import Services from "./LandingComponents/Services/Services";
import Projekty from "./LandingComponents/Projekty/Projekty";
import Onas from "./LandingComponents/Onas/Onas";
import Opinions from "./LandingComponents/Opinions/Opinions";
import ContactUs from "./LandingComponents/ContactUs/ContactUs";
import Under from "../../Components/Under/Under";

const Landing = () => {
    return (
        <div>
            <Presentation/>
            <Proposals/>
            <Services/>
            <Projekty/>
             <Onas/>
            <Opinions/>
            <ContactUs/>
            <Under/>
        </div>
    );
};

export default Landing;