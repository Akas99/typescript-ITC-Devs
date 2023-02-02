import s from './Modal.module.scss'
import clip from '../../assets/images/clip.svg'
import { useState, FC } from 'react'
import telegram from '../../assets/images/telegramModal.png'
import whatsapp from '../../assets/images/whatsappModal.png'

interface ModalProps {
  handleToggleVacanciesUi?: () => void
  vacanciesToggle?: boolean
  handleToggleMainUi?: () => void
  mainToggle?: boolean
  handleToggleUi?: () => void
  toggle?: boolean

}
const Modal: FC<ModalProps> = ({ vacanciesToggle, handleToggleVacanciesUi, mainToggle, handleToggleMainUi, toggle, handleToggleUi }) => {

  const stopProp = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  console.log(vacanciesToggle);
  console.log(mainToggle);

  return (
    <>
      <section
        onClick={handleToggleVacanciesUi || handleToggleMainUi || handleToggleUi}
        className={vacanciesToggle || mainToggle || toggle ? s.modal : s.modal__close}>
        <div
          onClick={stopProp}
          className={s.modal__wrap}>
          {toggle ? <a href='tel:+996700576765'>+996 700 576 765</a> : null}
          {!toggle ? <div className={s.modal__inp}>
            <p>ФИО</p>
            <input className={s.modal__largeInput} type="text" />
            <input className={s.modal__smallInput} type="text" placeholder='ФИО' />
          </div> : null}
          {!toggle ? <div className={s.modal__inp}>
            <p> E-mail</p>
            <input className={s.modal__largeInput} type="text" />
            <input className={s.modal__smallInput} type="text" placeholder='E-mail' />
          </div> : null}
          {!toggle ? <div className={s.modal__inp}>
            <p>{vacanciesToggle ? 'Сообщение рекрутеру' : 'Введите вопрос'}</p>
            <input className={s.modal__largeInput} type="text" />
            <input className={s.modal__smallInput} type="text" placeholder={vacanciesToggle ? 'Сообщение рекрутеру' : 'Введите вопрос'} />
          </div> : null}
          {vacanciesToggle ? <label>
            <img src={clip} alt="" />
            Прикрепить CVфайл
            <input type="file" />
          </label> : null}
          {!toggle ? <button>{vacanciesToggle ? 'Подать' : 'Отправить'}</button> : null}
          {mainToggle || toggle ? <p>или  Свяжитесь с нами через:</p> : null}
          {mainToggle || toggle
            ? <div className={s.modal__socialMedia}>
              <a href=""><p>Whatsapp</p><img src={whatsapp} alt="" /></a>
              <a href=""><p>Telegram</p><img src={telegram} alt="" /></a>
            </div>
            : null}
        </div>
      </section>
    </>
  )
}
export default Modal;