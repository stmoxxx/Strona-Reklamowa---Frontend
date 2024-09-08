import React from 'react';
import myOpinions from './Opinions.module.css'
import author from '../../../../images/author.png'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';

const OpinionCards = () => {
    return (
        <div className={myOpinions.cards_container}>
        <Swiper  className={myOpinions.slider}
                    modules={[Navigation]}
                    loop={true}
                    navigation={true}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    slidesPerView={1}>

        

            <SwiperSlide className={myOpinions.swiper_slider}>
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
            </SwiperSlide>
            <SwiperSlide className={myOpinions.swiper_slider}>
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
            </SwiperSlide>
            <SwiperSlide className={myOpinions.swiper_slider}>
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
            </SwiperSlide>
            <SwiperSlide className={myOpinions.swiper_slider}>
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
            </SwiperSlide>
            <SwiperSlide className={myOpinions.swiper_slider}>
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
            </SwiperSlide>
            <SwiperSlide className={myOpinions.swiper_slider}>
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
            </SwiperSlide>
        </Swiper>
            
        </div>
    );
};

export default OpinionCards;