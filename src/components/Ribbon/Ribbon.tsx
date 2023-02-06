import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { useAppDispatch } from '../../hooks';
import { addEventRibbon } from '../../store/slicers/mainSlice';
import { useInView } from 'react-intersection-observer';
import { changeRibbonStatus } from '../../store/slicers/navActiveSlice';
import s from './Ribbon.module.scss'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



export default function Ribbon() {
    const dispatch=useAppDispatch()
    const { ref, inView } = useInView({
      threshold: 0.3,
    });
    useEffect(()=>{
        dispatch(addEventRibbon())
    },[dispatch])
    useEffect(()=>{
        if(inView){
            dispatch(changeRibbonStatus("Лента событий"))
        }else{
            dispatch(changeRibbonStatus(""))
        }
    },[inView,dispatch])
 
    return (
        <section ref={ref} id='ribbon' className={s.ribbon}>
            <div className="container">
                <h3>Лента событий</h3>
                <Swiper
                spaceBetween={60}
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
                centeredSlides={false}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className={s.ribbon__slide}>
                    <div className={s.ribbon__box}>
                        <img src="https://devby.io/storage/images/59/38/59/11/derived/05ff293929e38a14973ba4cf1c59269d.jpg" alt="" />
                        <p>Мастер класс от разработчика Microsoft, Google</p>
                        <p>В январе прошел мастер класс с инженеромразработчиком программного обеспечения в Microsoft и Google - Акжолом Абдухалиевым На встрече высококлассный специалист рассказал о работе IT гигантов США и поделился применяемыми кейсами. выделил: мотивированность и интузиазм сотрудника. Сотрудники ITC devs и студенты ITC bootcamp регулярно повышают квалификацию проходя дополнительные семинары у опытных разработчиков</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide className={s.ribbon__slide}>
                    <div className={s.ribbon__box}>
                        <img src="https://devby.io/storage/images/59/38/59/11/derived/05ff293929e38a14973ba4cf1c59269d.jpg" alt="" />
                        <p>Февральский вебинар</p>
                        <p>Февральский вебинар прошел для студентов ITC bootcamp и разработчиков ITCdevs. Мастер класс был проведен дата аналитиком компании Benevity Inc(Канада) Ураном Болушом. Он поделится с уникальными кейсами применения библиотек numpy, pandas и прочим своим рабочим опытом и ответил на все вопросы.</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide className={s.ribbon__slide}>
                    <div className={s.ribbon__box}>
                        <img src="https://devby.io/storage/images/59/38/59/11/derived/05ff293929e38a14973ba4cf1c59269d.jpg" alt="" />
                        <p>Объединение усилий</p>
                        <p>Разработчики ITC devs проводят обсуждения, выработки планов реализации, архитектуры, мозговые штурмы. Затем взявшись за работу, взаимодействуют между собой обмениваясь советами или объединяясь вместе для решения новых вызовов. Таким образом разработчики создают благоприятный климат в котором создаются большие проекты.</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide className={s.ribbon__slide}>
                    <div className={s.ribbon__box}>
                        <img src="https://devby.io/storage/images/59/38/59/11/derived/05ff293929e38a14973ba4cf1c59269d.jpg" alt="" />
                        <p>Выпуск новой версии UBUNTU</p>
                        <p>21 апреля 2022 года, состоялся релиз очередной версии Ubuntu — 22.04 LTS «Jammy Jellyfish». Её кодовое название можно перевести на русский как "везучая медуза". Образы операционной системы уже доступны для скачивания с официального сайта. Долгосрочная поддержка системы означает что эта версия будет получать новые выпуски ядра Linux и постоянные обновления приложений в течение следующих 5 лет. В то время как критические исправления безопасности будут поставляться вплоть до 2032-04-21 (по программе Extended Security Maintenance) Подробнее https://habr.com/ru/news/t/662161/</p>
                    </div>

                </SwiperSlide>

            </Swiper>
            </div>
            
        </section>
    )
}
