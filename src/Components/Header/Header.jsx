import React from 'react';
import myHeader from './Header.module.css'
import myLogo from '../../images/newlogo.png'

const Header = () => {
    return (
        <div className={myHeader.header_container}>
            <div >
                <img className={myHeader.logo} src={myLogo} alt={''}/>
            </div>
            <div className={myHeader.header_right}>
                <div className={myHeader.header_right_item}>
                    Usługi
                </div>
                <div className={myHeader.header_right_item}>
                    Projekty
                </div>
                <div className={myHeader.header_right_item}>
                    O nas
                </div>
                <div className={myHeader.header_right_item}>
                    Kontakt
                </div>
            </div>
        </div>
    );
};

export default Header;