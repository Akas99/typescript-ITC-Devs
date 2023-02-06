import { useAppSelector,useAppDispatch } from '../../hooks'
import { handleToggleMain } from '../../store/slicers/modalSlice'
import s from './Main.module.scss'
import mainPic from '../../assets/images/mainPic.png'
import itcButton from '../../assets/images/ITCbutton.svg'
import Modal from '../Modal/Modal'


export default function Main() {
  const {mainToggle}=useAppSelector(state=>state.modal)
  const dispatch=useAppDispatch()
  const handleToggleMainUi = () => {
    dispatch(handleToggleMain())
  }

  return (
    <>
      <section id='main' className={s.main}>
        <div className={`container ${s.main__container}`}>
          <div className={s.main__box1}>
            <h3>ITC developers</h3>
            <h1>Ваш партнер в мире технологий</h1>
            <p>Наши профессионалы готовы предоставить вам качественные веб-решения и воплотить в жизнь ваши самые различные идеи.</p>
            <button
            onClick={handleToggleMainUi}
            >Получить консультацию
            </button>
            <img className={s.main__logoBtn} src={itcButton} alt="" />
          </div>
          <div className={s.main__box2}>
            <img src={mainPic} alt="" />
            <div>
              <h3>Добро пожаловать в  ITC Soft</h3>
              <h1>Разработка IT продуктов любой сложности</h1>
              <p>Наши профессионалы готовы предоставить вам качественные веб-решения и воплотить в жизнь ваши самые различные идеи.</p>
              <button
                onClick={handleToggleMainUi}
              >Получить консультацию
              </button>
            </div>
          </div>

        </div>
      </section>
      {mainToggle ? <Modal
        handleToggleMainUi={handleToggleMainUi}
        mainToggle={mainToggle}
      /> : null}
    </>
  )
}
