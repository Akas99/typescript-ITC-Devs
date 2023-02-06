import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, } from "swiper";
import { useInView } from 'react-intersection-observer';
import { useAppDispatch } from '../../hooks';
import {changeServicesStatus } from '../../store/slicers/navActiveSlice';
import s from './Services.module.scss'
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import './Services.css'



export default function Services() {
  const dispatch=useAppDispatch()
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if(inView){
      dispatch(changeServicesStatus("Услуги"))
    } else {
      dispatch(changeServicesStatus(""))
    }
  }, [inView,dispatch])

  return (
    <section ref={ref} id='services' className={s.services}>
      <div className={`container ${s.services__container}`}>
        <h3>Наши Услуги</h3>
        <h2>Простые решения</h2>
        <p>Веб продукты ITC devs это решения в виде мобильных, приложений для IOS и Android, Веб сайты, корпоративные базы данных, дизайн веб сайта, crm system. Также ITCdevs готов участвовать в мало распространенных, нестандартных и даже уникальных кейсах. Например, когда имеется frontend и backend сайта, но нет инструментария соединяющий их между собой. ITCdevs разработает для Вас прекрасный API. ITCdevs найдет решение и для Вашей любой задачи.</p>
        <Swiper
        slidesPerView={2}
        breakpoints={{
          992: {
            slidesPerView: 2,
            spaceBetween: 60
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 60
          }
        }}
        grid={{
          rows: 1,
        }}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination,]}

        className={`mySwiper ${s.services__swiper}`}
      >
        <SwiperSlide className={s.services__slide}>

          <div className={s.services__box}>
            <img src="https://millionstatusov.ru/pic/statpic/all8/5e04c21a52a39.jpg" alt="" />
            <p>Мобильные приложения</p>
            <p>Мобильное приложение станет прекрасным дополнением расширяющие и реализующие Ваши возможности одним касанием смартфона. Мы создадим для Вас легкое в применении, оптимизированное, гибкое решение.</p>
          </div>

        </SwiperSlide>
        <SwiperSlide className={s.services__slide}>

          <div className={s.services__box}>
            <img src="https://millionstatusov.ru/pic/statpic/all8/5e04c21a52a39.jpg" alt="" />
            <p>Веб сайты</p>
            <p>Какой же сегодня бизнес без красивого содержащий большого количество функции веб сайта?. Мы поможем Вам выразиться ясно, заявить о себе ярко и вызвать интерес разработав замечательную , многофункциональную веб страницу, который широким шаг приблизит Вас к достижению цели.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.services__slide}>

          <div className={s.services__box}>
            <img src="https://millionstatusov.ru/pic/statpic/all8/5e04c21a52a39.jpg" alt="" />
            <p>База данных</p>
            <p>Если у Вас имеется большое количество информации что не знаете где хранить? Мы разработаем для Вас электронную базу данных на языке современном Postgre SQL, которое позволит уместить и упорядочить гигантское количество информации, надежную и доступную владельцу 24/7.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.services__slide}>

          <div className={s.services__box}>
            <img src="https://millionstatusov.ru/pic/statpic/all8/5e04c21a52a39.jpg" alt="" />
            <p>Дизайн сайта</p>
            <p>Надоел старый интерфейс? У Вас изменилось настроение или захотелось чего то новенького? Обновление интерфейса веб сайта покажет преимущества с нового ракурса. Внимательные веб дизайнеры ITC devs раскроют еле уловимые тона и проявят их на интерфейсе Вашего веб сайта.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.services__slide}>

          <div className={s.services__box}>
            <img src="https://millionstatusov.ru/pic/statpic/all8/5e04c21a52a39.jpg" alt="" />
            <p>Телебот</p>
            <p>Вы захотели автоматизировать рутинную коммуникацию, то телебот является популярным решением данной задачи. Телебот является незаменимым помощником зарекомендовавший себя с наилучшей стороны. Его применение позволяет направить энергию куда-нибудь еще. Потому что справочное коммуникация в формате вопрос-ответ будет делать за Вас телебот. ITC devs разработает бота соответствующего Вашим требованиям, который будет трудно отличаться от живого оператора.</p>
          </div>
        </SwiperSlide>

      </Swiper>
      </div>

    </section>
  )
}
