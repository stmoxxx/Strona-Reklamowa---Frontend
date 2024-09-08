import React from 'react';
import myOnas from './Onas.module.css'
import onasPhoto from '../../../../images/onasPhoto.png'
import myHeader from "../../../../Components/Header/Header.module.css";
import myLogo from "../../../../images/newlogo.png";

const Onas = () => {
    return (
        <div className={myOnas.onas_container}>
            <div className={myOnas.title}>
                O Nas
            </div>
            <div className={myOnas.onas_wrap}>
                <div className={myOnas.photoWrap}>
                    <img className={myOnas.photo} src={onasPhoto} alt={''}/>
                </div>
                <div className={myOnas.text_container}>
                    <div className={myOnas.text_title}>
                        Pracujemy intensywnie i zawsze jesteśmy gotowi pracować jeszcze więcej
                    </div>
                    <div className={myOnas.text}>
                        Od ponad 5 lat tworzymy strony internetowe i inne ekscytujące projekty na zamówienie. Nasi klienci są zawsze zadowoleni i wracają, aby rozwijać swoje nowe projekty.
                        Jesteśmy najlepszą inwestycją dla rozwoju Twojego biznesu. Poznaj nas współpracując z nami i upewnij się, że nasza praca była tego warta
                    </div>
                    <div>
                        <img className={myHeader.logo} src={myLogo} alt={''}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Onas;