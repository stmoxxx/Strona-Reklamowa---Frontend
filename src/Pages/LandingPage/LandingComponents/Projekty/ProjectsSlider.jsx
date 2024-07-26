import React from "react";
import project1 from '../../../../images/project1.png'
import project2 from '../../../../images/project2.png'
import project3 from '../../../../images/project3.png'
import myProjekty from "../Projekty/Projekty.module.css";
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow, Navigation, Pagination} from 'swiper/modules';

function ProjectsSlider () {
    return (
        <div className={"container"}>
            <Swiper className={myProjekty.slider}
                    modules={[Navigation, Pagination]}
                    spaceBetween={15}
                    slidesPerView={3}
                    loop={true}
                    navigation={true}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    resizeObserver={true}
                    setWrapperSize={true}
                    updateOnWindowResize={true}

            >
                <SwiperSlide><img src={project1} alt={''}/></SwiperSlide>
                <SwiperSlide><img src={project2} alt={''}/></SwiperSlide>
                <SwiperSlide><img src={project3} alt={''}/></SwiperSlide>
                <SwiperSlide><img src={project2} alt={''}/></SwiperSlide>

            </Swiper>
        </div>

    );
}

export default ProjectsSlider;
