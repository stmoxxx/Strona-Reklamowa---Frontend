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
                        Excellent User-Friendly Design
                    </div>
                    <div className={myOpinions.opinion_text}>
                        The website you designed exceeded my expectations.
                        It's easy to navigate, visually appealing, and perfectly aligned with my brand. I've received great feedback from my customers as well.
                    </div>
                    <div className={myOpinions.opinion_author_container}>
                        <div>
                            <img className={myOpinions.opinion_author_img} src={author} alt={''}/>
                        </div>
                        <div className={myOpinions.opinion_author}>
                            Sarah Johnson
                        </div>
                    </div>
                    <div className={myOpinions.opinion_date}>
                        September 9, 2024
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className={myOpinions.swiper_slider}>
            <div className={myOpinions.card}>
                    <div className={myOpinions.opinion_title}>
                        Professional and Modern
                    </div>
                    <div className={myOpinions.opinion_text}>
                        I'm thoroughly impressed with the professionalism and modern look of the website.
                        It has significantly improved my online presence, and my customers find it very easy to use. Thank you for your great work!
                    </div>
                    <div className={myOpinions.opinion_author_container}>
                        <div>
                            <img className={myOpinions.opinion_author_img} src={author} alt={''}/>
                        </div>
                        <div className={myOpinions.opinion_author}>
                            David Martinez
                        </div>
                    </div>
                    <div className={myOpinions.opinion_date}>
                        September 7, 2024
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className={myOpinions.swiper_slider}>
            <div className={myOpinions.card}>
                    <div className={myOpinions.opinion_title}>
                        Fast and Efficient Work
                    </div>
                    <div className={myOpinions.opinion_text}>
                        You delivered the project quickly without compromising quality.
                        The website runs smoothly, looks fantastic, and my business has already seen an increase in traffic. I highly recommend your services!
                    </div>
                    <div className={myOpinions.opinion_author_container}>
                        <div>
                            <img className={myOpinions.opinion_author_img} src={author} alt={''}/>
                        </div>
                        <div className={myOpinions.opinion_author}>
                            Emily Stevens
                        </div>
                    </div>
                    <div className={myOpinions.opinion_date}>
                        September 3, 2024
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className={myOpinions.swiper_slider}>
            <div className={myOpinions.card}>
                    <div className={myOpinions.opinion_title}>
                        Increased Customer Engagement
                    </div>
                    <div className={myOpinions.opinion_text}>
                        The design and functionality of the website have really increased customer engagement.
                        The clean layout and attention to detail have made it easier for visitors to find what they're looking for. Fantastic job!
                    </div>
                    <div className={myOpinions.opinion_author_container}>
                        <div>
                            <img className={myOpinions.opinion_author_img} src={author} alt={''}/>
                        </div>
                        <div className={myOpinions.opinion_author}>
                            Michael Thompson
                        </div>
                    </div>
                    <div className={myOpinions.opinion_date}>
                        August 29, 2024
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className={myOpinions.swiper_slider}>
            <div className={myOpinions.card}>
                    <div className={myOpinions.opinion_title}>
                        Very Responsive Design
                    </div>
                    <div className={myOpinions.opinion_text}>
                        The website works flawlessly across all devices, which has been a huge advantage for my business.
                        The design is responsive, and I love how it looks on mobile. Your hard work truly paid off!
                    </div>
                    <div className={myOpinions.opinion_author_container}>
                        <div>
                            <img className={myOpinions.opinion_author_img} src={author} alt={''}/>
                        </div>
                        <div className={myOpinions.opinion_author}>
                            Linda Nguyen
                        </div>
                    </div>
                    <div className={myOpinions.opinion_date}>
                        September 5, 2024
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className={myOpinions.swiper_slider}>
            <div className={myOpinions.card}>
                    <div className={myOpinions.opinion_title}>
                        Seamless User Experience
                    </div>
                    <div className={myOpinions.opinion_text}>
                        From the layout to the features, everything is well-organized and user-friendly.
                        It’s clear that you took the time to understand my business and crafted a site that reflects that perfectly. Great work!
                    </div>
                    <div className={myOpinions.opinion_author_container}>
                        <div>
                            <img className={myOpinions.opinion_author_img} src={author} alt={''}/>
                        </div>
                        <div className={myOpinions.opinion_author}>
                            Robert Harris
                        </div>
                    </div>
                    <div className={myOpinions.opinion_date}>
                        September 1, 2024
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
            
        </div>
    );
};

export default OpinionCards;