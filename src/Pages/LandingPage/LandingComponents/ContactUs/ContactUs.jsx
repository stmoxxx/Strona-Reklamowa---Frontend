import React from 'react';
import ContactForm from "../../../../Components/ContactForm/ContactForm";
import myContactUs from './ContactUs.module.css'

const ContactUs = () => {
    return (
        <div className={myContactUs.contactus_container}>
            <div className={myContactUs.title}>Skontaktuj <span style={{color: "rgba(2, 6, 111, 0.8)"}}>się</span> <span style={{color: "rgba(255, 43, 43, 1)"}}>z nami!</span> </div>
            <ContactForm/>
        </div>
    );
};

export default ContactUs;