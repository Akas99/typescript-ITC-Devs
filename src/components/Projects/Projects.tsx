import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { changeProjectStatus } from '../../store/slicers/navActiveSlice';
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
import s from './Projects.module.scss'
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import './Projects.css'


export default function Projects() {
    const dispatch = useAppDispatch()
    const { ref, inView } = useInView({
        threshold: 0.3,
    });
    useEffect(() => {
        if (inView) {
            dispatch(changeProjectStatus("Портфолио проектов"))
        } else {
            dispatch(changeProjectStatus(""))
        }

    }, [inView,dispatch])
    return (
        <section ref={ref} id='projects' className={s.projects}>
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
        </section>
    )
}