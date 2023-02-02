import s from './AboutUs.module.scss'
import { useInView } from 'react-intersection-observer';
import Navbar from '../Navbar/Navbar';

export default function AboutUs() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  // console.log(inView);
  // console.log(one);
  
  return (
    <>
      <section ref={ref} id='aboutUs' className={s.aboutUs}>
        <div className="container">
          <h3>О нас</h3>
          <h2 className={s.aboutUs__title1}>Мы умеем приблизить будущее</h2>

          <div className={s.aboutUs__wrap}>
            <div className={s.aboutUs__wrapper}>

            </div>
            <div className={s.aboutUs__wrapper}>
              <p className={s.aboutUs__text1}>Компания основана в 2020 году начав запуск онлайн курсы по программированию ITC bootcamp для населения переживавший локдаун в связи с пандемией Ковид 19. К моменту снятия всех ограничений ITC bootcamp приобрела популярность и академия ITC bootcamp перешла в оффлайн формат. Академия применила комплекс методов по улучшению сервиса: побдор удобных локаций для офисов и классов, создание авторских учебных материалов, комплектация состава менторов на каждую группу. в ____ мес 2020 открылся в филиал в городе _ __ __, открылись 2 еще в двух городах ____ ______ , ___________, в _____месяце 202_ году. ITCbootcamp стал удовлетворять потребность в образований на зарубежном рынке. Так в 202_ году распространились филиалы в г. Ташкент, Узбекистан а также г. Алмата, Республика Казахстан. Такой динамичный прогресс позволил принять решение сформировать группы разработчиков в компанию ITC Dev.</p>
            </div>
          </div>
        </div>
      </section>
      <Navbar/>
    </>
  )
}
