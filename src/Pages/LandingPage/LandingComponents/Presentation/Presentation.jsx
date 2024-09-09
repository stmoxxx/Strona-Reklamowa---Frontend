import React from 'react';
import ReactPlayer from "react-player";
import myPresentation from './Presentation.module.css'
import BlueButton from "../../../../Components/Buttons/BlueButton";
import RegularButton from "../../../../Components/Buttons/RegularButton";
import Video from "../../../../images/video.mp4"
import {Link} from "react-router-dom";

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
                    <BlueButton>
                        <Link to={'/contact'} style={{textDecoration:"none"}}>
                            Darmowa Kosultacja
                        </Link>
                    </BlueButton>
                    <RegularButton>
                        <Link to={'/services'} style={{textDecoration:"none"}}>
                            Usługi
                        </Link>
                    </RegularButton>
                </div>
            </div>

            <div className={myPresentation.right_side}>
                <div className={myPresentation.slider}>
                    <ReactPlayer className={myPresentation.video} url={Video} playing loop muted />
                </div>
            </div>
        </div>
    );
};

export default Presentation;