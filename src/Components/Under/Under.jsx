import React from 'react';
import myUnder from "./Under.module.css";
import myHeader from "../Header/Header.module.css";
import myLogo from "../../images/newlogo.png";

const Under = () => {
    return (
        <div className={myUnder.container}>
            <div>
                <img className={myHeader.logo} src={myLogo} alt={''}/>
            </div>
        </div>
    );
};

export default Under;