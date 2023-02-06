import { logos } from '../../config'
import s from './Technologies.module.scss'


export default function Technologies() {
  const newLogo = logos.map((el, index) => {
    return (
      <div
        key={index}
        className={s.technologies__box}>
        <img src={el} alt="" />
      </div>
    )
  })
  return (
    <section id='technologies' className={s.technologies}>
      <div className={`container ${s.technologies__container}`}>
        <h3>Применяемые технологии</h3>
        <h2>Технологии для новаторов</h2>
        <p>В разработке своей продукции используется только проверенные и надежные технологии. Разработчики ITCdevs пристально следят за релизами и обновлениями стэков, библиотек и фреймворков. В процессе изучения и тестирования на соответствие требованиям таким как: удобства и качества, мультизадачности, интеграцию, скорости и т.д. Разработчиками ITCdevs производится отсев, а подходящие пополняют инструментарии, с которыми мастерски создают продукцию для Вас.</p>
        <div className={`row ${s.technologies__row}`}>
          {newLogo}
        </div>
      </div>
    </section>
  )
}
