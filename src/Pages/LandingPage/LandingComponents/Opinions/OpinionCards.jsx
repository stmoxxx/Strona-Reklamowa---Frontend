import React from 'react';
import myOpinions from './Opinions.module.css'
import author from '../../../../images/author.png'
const OpinionCards = () => {
    return (
        <div className={myOpinions.cards_container}>
            <div className={myOpinions.card}>
                <div className={myOpinions.opinion_title}>
                    Tytuł opinii
                </div>
                <div className={myOpinions.opinion_text}>
                    Opinia
                </div>
                <div className={myOpinions.opinion_author_container}>
                    <div>
                        <img className={myOpinions.opinion_author_img} src={author} alt={''}/>
                    </div>
                    <div className={myOpinions.opinion_author}>
                        Imię autora recenzji
                    </div>
                </div>
                <div className={myOpinions.opinion_date}>
                    Date
                </div>
            </div>
            <div className={myOpinions.card}>
                <div className={myOpinions.opinion_title}>
                    Tytuł opinii
                </div>
                <div className={myOpinions.opinion_text}>
                    Opinia
                </div>
                <div className={myOpinions.opinion_author_container}>
                    <div>
                        <img className={myOpinions.opinion_author_img} src={author} alt={''}/>
                    </div>
                    <div className={myOpinions.opinion_author}>
                        Imię autora recenzji
                    </div>
                </div>
                <div className={myOpinions.opinion_date}>
                    Date
                </div>
            </div>
            <div className={myOpinions.card}>
                <div className={myOpinions.opinion_title}>
                    Tytuł opinii
                </div>
                <div className={myOpinions.opinion_text}>
                    Opinia
                </div>
                <div className={myOpinions.opinion_author_container}>
                    <div>
                        <img className={myOpinions.opinion_author_img} src={author} alt={''}/>
                    </div>
                    <div className={myOpinions.opinion_author}>
                        Imię autora recenzji
                    </div>
                </div>
                <div className={myOpinions.opinion_date}>
                    Date
                </div>
            </div>
            <div className={myOpinions.card}>
                <div className={myOpinions.opinion_title}>
                    Tytuł opinii
                </div>
                <div className={myOpinions.opinion_text}>
                    Opinia
                </div>
                <div className={myOpinions.opinion_author_container}>
                    <div>
                        <img className={myOpinions.opinion_author_img} src={author} alt={''}/>
                    </div>
                    <div className={myOpinions.opinion_author}>
                        Imię autora recenzji
                    </div>
                </div>
                <div className={myOpinions.opinion_date}>
                    Date
                </div>
            </div>
            <div className={myOpinions.card}>
                <div className={myOpinions.opinion_title}>
                    Tytuł opinii
                </div>
                <div className={myOpinions.opinion_text}>
                    Opinia
                </div>
                <div className={myOpinions.opinion_author_container}>
                    <div>
                        <img className={myOpinions.opinion_author_img} src={author} alt={''}/>
                    </div>
                    <div className={myOpinions.opinion_author}>
                        Imię autora recenzji
                    </div>
                </div>
                <div className={myOpinions.opinion_date}>
                    Date
                </div>
            </div>
            <div className={myOpinions.card}>
                <div className={myOpinions.opinion_title}>
                    Tytuł opinii
                </div>
                <div className={myOpinions.opinion_text}>
                    Opinia
                </div>
                <div className={myOpinions.opinion_author_container}>
                    <div>
                        <img className={myOpinions.opinion_author_img} src={author} alt={''}/>
                    </div>
                    <div className={myOpinions.opinion_author}>
                        Imię autora recenzji
                    </div>
                </div>
                <div className={myOpinions.opinion_date}>
                    Date
                </div>
            </div>
        </div>
    );
};

export default OpinionCards;