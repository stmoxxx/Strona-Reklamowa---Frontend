import React from 'react';
import myOpinions from './Opinions.module.css'
import OpinionCards from "./OpinionCards";


const Opinions = () => {
    return (
        <div className={myOpinions.opinions_container}>
            <div className={myOpinions.title}>
                Opinie naszych klientów
            </div>
            <OpinionCards/>
        </div>
    );
};

export default Opinions;