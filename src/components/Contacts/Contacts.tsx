import { useAppSelector, useAppDispatch } from '../../hooks'
import { handleToggle } from '../../store/slicers/modalSlice'
import s from './Contacts.module.scss'
import location from '../../assets/images/location.svg'
import phone from '../../assets/images/phone.svg'
import mail from '../../assets/images/mail.svg'
import Modal from '../Modal/Modal'


export default function Contacts() {
  const { toggle } = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch()
  const handleToggleUi = () => {
    dispatch(handleToggle())
  }
  return (
    <>
      <section id='contacts' className={s.contacts}>
        <div className={`container ${s.contacts__container}`}>
          <div className={s.contacts__box}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87212.17265386146!2d74.55705573934512!3d42.88507176472997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7e643f83f0f%3A0x8438d20e2b60933a!2zMTEyINGD0LvQuNGG0LAg0J7RgNC-0LfQsdC10LrQvtCy0LAsINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1672847997169!5m2!1sru!2skg" style={{ filter: 'invert(100%)' }} loading="lazy"></iframe>
          </div>
          <div className={s.contacts__box}>
            <h3>Контакты</h3>
            <h2>Нас легко найти</h2>
            <div>
              <img src={location} alt="" />
              <p>г.Бишкек, ул.Орозбекова 112</p>
            </div>
            <div>
              <img src={phone} alt="" />
              <a href='tel:+996700576765'>+996 700 576 765</a>
            </div>
            <div>
              <img src={mail} alt="" />
              <a href='mailto:itc_devs@gmail.com'>itc_devs@gmail.com</a>
            </div>
            <button
            onClick={handleToggleUi}
            >связаться
            </button>
          </div>
        </div>
      </section>
      {toggle ? <Modal
        handleToggleUi={handleToggleUi}
        toggle={toggle}
      /> : null}
    </>
  )
}
