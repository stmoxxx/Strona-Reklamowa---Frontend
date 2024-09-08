import React from 'react';
import myPresentation from './Presentation.module.css'
import BlueButton from "../../../../Components/Buttons/BlueButton";
import RegularButton from "../../../../Components/Buttons/RegularButton";
const Presentation = () => {
    return (
        <div className={myPresentation.presentation_container}>
            <div className={myPresentation.left_side}>
                <div className={myPresentation.text_field}>
                    Agencja internetowa zajmująca się&nbsp;
                    <span className={myPresentation.colored_text}>
                    projektowaniem i tworzeniem
                </span>&nbsp;
                    stron internetowych w Polsce. Tworzymy strony internetowe dla Twojego biznesu.
                </div>
                <div className={myPresentation.opis} >
                    Od identyfikacji wizualnej po pełną stronę internetową, tworzymy narzędzia, które wyróżnią Twoją
                    firmę na rynku i pomogą Ci przyciągnąć nowych klientów.
                </div>
                <div className={myPresentation.buttons}>
                    <BlueButton>Darmowa Kosultacja</BlueButton>
                    <RegularButton>Usługi</RegularButton>
                </div>
            </div>

            <div className={myPresentation.right_side}>
                <div className={myPresentation.slider}>
                    Slider
                </div>
            </div>
        </div>
    );
};

export default Presentation;