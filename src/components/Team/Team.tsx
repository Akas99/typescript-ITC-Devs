import { Grid, Pagination } from "swiper";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { changeTeamStatus } from '../../store/slicers/navActiveSlice';
import { Swiper, SwiperSlide } from "swiper/react";
import s from './Team.module.scss'
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";


export default function Team() {
  const dispatch = useAppDispatch()
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      dispatch(changeTeamStatus("Наша команда"))
    } else {
      dispatch(changeTeamStatus(""))
    }
  }, [inView, dispatch])
  return (
    <section ref={ref} id='team' className={s.team}>
      <div className={`container ${s.team__container}`}>
        <div className={s.team__title}>
          <h3>Наша команда</h3>
          <h2>Традиционный профессионализм </h2>
        </div>
        <div className={s.team__text}>
          <p>Команда разработчиков ITC devs это креативные специалисты экстра класса, прошедшие тщательную подготовку в Академии программирования ITC bootcamp. Имеющие опыт в IT компаниях Команда разработчиков ITC Devs применяют ультрасовременные технологии и языки в своих разработках для того, чтобы клиенты ITC Devs пользовались продуктами опережающее время.</p>
        </div>

        <Swiper
          slidesPerView={3}
          breakpoints={{
            992: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 40
            }
          }}
          grid={{
            rows: 1,
          }}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className={`mySwiper ${s.team__swiper}`}
        >
          <SwiperSlide className={s.team__slide}>
            <div className={s.team__box}>
              <img src="https://s00.yaplakal.com/pics/pics_original/2/7/5/17247572.jpg" alt="" />
              <p>Лев</p>
              <ul>
                <li>______________ разработчик</li>
                <li>Принимал участие_____ проектах</li>
                <li>Активность в ________, __________</li>
                <li>Стаж_____ года (лет)</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.team__slide}>
            <div className={s.team__box}>
              <img src="https://s00.yaplakal.com/pics/pics_original/2/7/5/17247572.jpg" alt="" />
              <p>Лев</p>
              <ul>
                <li>______________ разработчик</li>
                <li>Принимал участие_____ проектах</li>
                <li>Активность в ________, __________</li>
                <li>Стаж_____ года (лет)</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.team__slide}>
            <div className={s.team__box}>
              <img src="https://s00.yaplakal.com/pics/pics_original/2/7/5/17247572.jpg" alt="" />
              <p>Лев</p>
              <ul>
                <li>______________ разработчик</li>
                <li>Принимал участие_____ проектах</li>
                <li>Активность в ________, __________</li>
                <li>Стаж_____ года (лет)</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.team__slide}>
            <div className={s.team__box}>
              <img src="https://s00.yaplakal.com/pics/pics_original/2/7/5/17247572.jpg" alt="" />
              <p>Лев</p>
              <ul>
                <li>______________ разработчик</li>
                <li>Принимал участие_____ проектах</li>
                <li>Активность в ________, __________</li>
                <li>Стаж_____ года (лет)</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.team__slide}>
            <div className={s.team__box}>
              <img src="https://s00.yaplakal.com/pics/pics_original/2/7/5/17247572.jpg" alt="" />
              <p>Лев</p>
              <ul>
                <li>______________ разработчик</li>
                <li>Принимал участие_____ проектах</li>
                <li>Активность в ________, __________</li>
                <li>Стаж_____ года (лет)</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.team__slide}>
            <div className={s.team__box}>
              <img src="https://s00.yaplakal.com/pics/pics_original/2/7/5/17247572.jpg" alt="" />
              <p>Лев</p>
              <ul>
                <li>______________ разработчик</li>
                <li>Принимал участие_____ проектах</li>
                <li>Активность в ________, __________</li>
                <li>Стаж_____ года (лет)</li>
              </ul>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  )
}
