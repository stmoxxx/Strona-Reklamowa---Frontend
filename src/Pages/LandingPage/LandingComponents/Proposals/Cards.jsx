import React from 'react';
import myCard from './Card.module.css'
const Cards = () => {
    return (
        <div className={myCard.cards_container}>
            <div className={myCard.card}>
                <span className={myCard.number}>01</span>
                <div className={myCard.heading}>Kompleksowe podejście</div>
                <div className={myCard.text}>
                    Oferujemy pełen zakres usług - od projektowania logo po promocję strony internetowej.
                </div>
            </div>

            <div className={myCard.card}>
                <span className={myCard.number}>02</span>
                <div className={myCard.heading}>Technologie i kreatywność</div>
                <div className={myCard.text}>
                    Jesteśmy na bieżąco z trendami, aby mieć pewność, że Twoja witryna jest nie tylko piękna, ale i skuteczna.
                </div>
            </div>

            <div className={myCard.card}>
                <span className={myCard.number}>03</span>
                <div className={myCard.heading}>Realizacja celu</div>
                <div className={myCard.text}>
                    Nasi klienci uzyskują realne wyniki - więcej odwiedzających, połączeń i sprzedaży.
                </div>
            </div>

            <div className={myCard.card}>
                <span className={myCard.number}>04</span>
                <div className={myCard.heading}>Pełne wsparcie projektu</div>
                <div className={myCard.text}>
                    Wspieramy klientów nawet po wydaniu projektu i reagujemy na opinie klientów, aby zmaksymalizować jakość naszej pracy
                </div>
            </div>
        </div>

    );
};

export default Cards;