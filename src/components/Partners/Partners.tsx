import s from './Partners.module.scss'
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Grid } from "swiper";
import "swiper/css/grid";
import partners1 from '../../assets/images/nihao.svg'
import parnters2 from '../../assets/images/kyrgyzstan.svg'
import partners3 from '../../assets/images/bank asia.svg'
import partners4 from '../../assets/images/green market.svg'
import partners5 from '../../assets/images/ligapolet.svg'
import partners6 from '../../assets/images/emotors.svg'
import partners7 from '../../assets/images/limitless.svg'
import partners8 from '../../assets/images/stores.svg'


export default function Partners() {
    return (
        <section id='partners' className={s.partners}>
            <div className="container">
                <h3>Партнеры и клиенты</h3>
                <Swiper
                slidesPerView={2}
                spaceBetween={60}
                breakpoints={{
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 60,
                        pagination:false
                    },
                    768:{
                        slidesPerView: 1,
                        spaceBetween: 60,
                        pagination:false
                    },
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 60,
                        autoplay:false,
                        // pagination:true
                    }
                }}
                grid={{
                    rows: 1,
                  }}
                centeredSlides={false}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                
                modules={[Autoplay,Grid, Pagination]}
                className={`mySwiper ${s.partners__swiper}`}
            >
                <SwiperSlide className={s.partners__slide}>
                    <img src={partners1} alt="" />
                
                </SwiperSlide>
                <SwiperSlide className={s.partners__slide}>
                    <img src={parnters2} alt="" />
                
                </SwiperSlide>
                <SwiperSlide className={s.partners__slide}>
                    <img src={partners3} alt="" />
                
                </SwiperSlide>
                <SwiperSlide className={s.partners__slide}>
                    <img src={partners4} alt="" />
        
                </SwiperSlide>
                <SwiperSlide className={s.partners__slide}>
                    <img src={partners5} alt="" />
                
                </SwiperSlide>
                <SwiperSlide className={s.partners__slide}>
                    <img src={partners6} alt="" />
                
                </SwiperSlide>
                <SwiperSlide className={s.partners__slide}>
                    <img src={partners7} alt="" />
                
                </SwiperSlide>
                <SwiperSlide className={s.partners__slide}>
                    <img src={partners8} alt="" />
        
                </SwiperSlide>
            </Swiper>
            </div>
            
        </section>
    )
}
