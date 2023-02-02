import s from './Charity.module.scss'
import birds from '../../assets/images/birds.svg'

export default function Charity() {
  return (
    <section id='charity' className={s.charity}>
        <div className="container">
            <h3>Благотворительность</h3>
            <div className={s.charity__box}>
                <img src={birds} alt="" />
                <p>“Бишкекский городской дом-интернат общего типа для престарелых и людей с ограниченными возможностями”</p>
                <a target='_blank' href="http://dominter.biz.kg/">dominter.biz.kg</a>
                <p>г. Бишкек</p>
                <p>720055</p>
                <p>Абая 93</p>
                <p>Первомайский район</p>
                <a href="tel:+996312540305">+996(312) 54 03 05</a>
            </div>
        </div>
    </section>
  )
}
