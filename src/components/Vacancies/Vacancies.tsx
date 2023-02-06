import { handleToggleVacancies } from '../../store/slicers/modalSlice'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeVacanciesStatus } from '../../store/slicers/navActiveSlice';
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
import s from './Vacancies.module.scss'
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import Modal from '../Modal/Modal';



export default function Vacancies() {
  const {vacanciesToggle}=useAppSelector(state=>state.modal)
  const dispatch=useAppDispatch()
  const handleToggleVacanciesUi=()=>{
    dispatch(handleToggleVacancies())
  }
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  useEffect(()=>{
    if(inView){
      dispatch(changeVacanciesStatus("Вакансии"))
    }else{
      dispatch(changeVacanciesStatus(""))
    }
  },[inView,dispatch])

  return (
    <>
      <section ref={ref} id='vacancies' className={s.vacancies}>
        <div className={`container ${s.vacancies__container}`}>
          <h3>Вакансии</h3>
          <h2>Станьте частью технологической команды и примите участие в настоящем для трансформации будущего вместе с ITCdevs</h2>
          <Swiper
            slidesPerView={3}
            breakpoints={{
              1200: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 30
              }
            }}
            grid={{
              rows: 1,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className={`mySwiper ${s.vacancies__swiper}`}
          >
            <SwiperSlide className={s.vacancies__slide}>
              <div className={s.vacancies__box}>
                <div className={s.vacancies__circle}></div>
                <p>
                  Открыта позиция
                </p>
                <br />
                <br />
                <p>Срок </p>
                <p>Требования</p>
                <p>Обязанности</p>
                <button
                onClick={handleToggleVacanciesUi}
                >Подать заявку 
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className={s.vacancies__slide}>
              <div className={s.vacancies__box}>
                <div className={s.vacancies__circle}></div>
                <p>
                  Открыта позиция
                </p>
                <br />
                <br />
                <p>Срок </p>
                <p>Требования</p>
                <p>Обязанности</p>
                <button
                onClick={handleToggleVacanciesUi}
                >Подать заявку 
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className={s.vacancies__slide}>
              <div className={s.vacancies__box}>
                <div className={s.vacancies__circle}></div>
                <p>
                  Открыта позиция
                </p>
                <br />
                <br />
                <p>Срок </p>
                <p>Требования</p>
                <p>Обязанности</p>
                <button
                onClick={handleToggleVacanciesUi}
                >Подать заявку 
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
          <h2>“Дружеская атмосфера и желание нести добро в мир является формулой прогрессивных разработок ITC devs”</h2>
        </div>
      </section>
      {vacanciesToggle?<Modal
      handleToggleVacanciesUi={handleToggleVacanciesUi}
      vacanciesToggle={vacanciesToggle}
      />:null}
    </>
  )
}
