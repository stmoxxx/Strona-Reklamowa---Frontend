import React from 'react';
import myHeader from './Header.module.css'
import myLogo from '../../images/newlogo.png'
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className={myHeader.header_container}>
            <div >
                <Link to={'/'}>
                    <img className={myHeader.logo} src={myLogo} alt={''}/>
                </Link>
            </div>
            <div className={myHeader.header_right}>
                <Link to={'/services'} className={myHeader.header_right_item}>
                    Usługi
                </Link>
                <Link to={'/projects'} className={myHeader.header_right_item}>
                    Projekty
                </Link>
                <Link to={'/about'} className={myHeader.header_right_item}>
                    O nas
                </Link>
                <Link to={'/contact'} className={myHeader.header_right_item}>
                    Kontakt
                </Link>
            </div>
        </div>
    );
};

export default Header;