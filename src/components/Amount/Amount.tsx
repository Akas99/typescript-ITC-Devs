import s from './Amount.module.scss'
import little from '../../assets/images/little.svg'

export default function Amount() {
  return (
    <section id='amount' className={s.amount}>
      <div className={`container ${s.amount__container}`}>
        <div className={s.amount__box}>
          <p>7</p>
          <p>Проектов реализованы</p>
        </div>
        <div className={s.amount__box}>
          <p>3</p>
          <p>Проекта в процессе разработки</p>
        </div>
        <div className={s.amount__box}>
          <p>4</p>
          <p>Проекта ожидают очереди</p>
        </div>
      </div>
      <img src={little} alt="" />
    </section>
  )
}
