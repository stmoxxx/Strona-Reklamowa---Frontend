import React from 'react';
import myServices from './Services.module.css'
import ServicesCard from "./ServicesCard";
const Services = () => {
    return (
        <div>
            <div className={myServices.background}>
                <div className={myServices.title}>Usługi</div>
                <ServicesCard/>
            </div>
        </div>
    );
};

export default Services;