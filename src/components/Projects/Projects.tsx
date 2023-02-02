import s from './Projects.module.scss'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper";
import './Projects.css'

export default function Projects() {
    return (
        <section id='projects' className={s.projects}>
            <div className={`container ${s.projects__container}`}>
                <h3>Портфолио проектов</h3>
                <h2>Идея меняет мир</h2>
                <div className="row">
                    <div className={s.projects__box}>
                        <a href="">Вебсайт Stores.kg</a>
                    </div>
                    <div className={s.projects__box}>
                        <a href="">Вебсайт landuse-association.kg</a>
                    </div>
                    <div className={s.projects__box}>
                        <a href="">Вебсайт bankasia.kg</a>
                    </div>
                    <div className={s.projects__box}>
                        <a href="">Вебсайт nihao.kg</a>
                    </div>
                    <div className={s.projects__box}>
                        <a href="">Приложение Feliz Сashback</a>
                    </div>
                    <div className={s.projects__box}>
                        <a href="">CRM система</a>
                    </div>
                </div>
                <Swiper
                slidesPerView={1}

                grid={{
                    rows: 1,
                }}
                spaceBetween={60}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
                className={`mySwiper ${s.projects__swiper}`}
            >
                <SwiperSlide className={s.projects__slide}>
                    <div className={`${s.projects__box} ${s.box1}`}>
                        <a href="">Вебсайт Stores.kg</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.projects__slide}>
                    <div className={`${s.projects__box} ${s.box2}`}>
                        <a href="">Вебсайт landuse-association.kg</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.projects__slide}>
                    <div className={`${s.projects__box} ${s.box3}`}>
                        <a href="">Вебсайт bankasia.kg</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.projects__slide}>
                    <div className={`${s.projects__box} ${s.box4}`}>
                        <a href="">Вебсайт nihao.kg</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.projects__slide}>
                    <div className={`${s.projects__box} ${s.box5}`}>
                        <a href="">Приложение Feliz Сashback</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.projects__slide}>
                    <div className={`${s.projects__box} ${s.box6}`}>
                        <a href="">CRM система</a>
                    </div>
                </SwiperSlide>
            </Swiper>

            </div>
            
            {/* <button>Развернуть</button> */}
        </section>
    )
}