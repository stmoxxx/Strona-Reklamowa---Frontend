import React from 'react';
import myServicesCard from './ServicesCard.module.css'
import tsi from '../../../../images/tsi.png'
import tski from '../../../../images/tski.png'
import ServicesButton from "../../../../Components/Buttons/ServicesButton";

const ServicesCard = () => {
    return (
        <div className={myServicesCard.cardsWrap}>
            <div className={myServicesCard.card}>
                <img className={myServicesCard.photoWrap} src={tsi} alt={''}/>
                <div className={myServicesCard.descriptionWrap}>
                    <div className={myServicesCard.title}>Tworzenie stron internetowych</div>
                    <div className={myServicesCard.description}>
                        Tworzymy strony internetowe, które działają idealnie na wszystkich urządzeniach. Twoja strona
                        będzie
                        szybka i bezpieczna.
                    </div>
                </div>
                <ServicesButton>Więcej Informacji</ServicesButton>
            </div>
            <div className={myServicesCard.card}>
                <img className={myServicesCard.photoWrap} src={tski} alt={''}/>
                <div className={myServicesCard.descriptionWrap}>
                    <div className={myServicesCard.title}>Tworzenie sklepów internetowych</div>
                    <div className={myServicesCard.description}>
                        Stworzymy sklep internetowy z uporządkowaną logiką i całkowicie bezpieczny, który będzie w stanie poradzić sobie z każdym obciążeniem.
                    </div>
                </div>
                <ServicesButton>Więcej Informacji</ServicesButton>
            </div>
        </div>
    );
};

export default ServicesCard;