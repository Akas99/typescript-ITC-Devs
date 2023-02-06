import { FC } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { handleToggle } from '../../store/slicers/modalSlice'
import s from './Advertisement.module.scss'
import Modal from '../Modal/Modal'


interface AdvertisementProps {
  second?: boolean
}

const Advertisement: FC<AdvertisementProps> = ({ second }) => {
  const { toggle } = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch()
  const handleToggleUi = () => {
    dispatch(handleToggle())
  }
  return (
    <>
      <section id='advertisement' className={!second ? s.advertisement : s.advertisementSecond}>
        <div className={`container ${s.advertisement__container}`}>
          <div></div>
          <div>
            <p>Здесь будет реклама!</p>
            <p>Описание рекламного баннера</p>
          </div>
          <button
            onClick={handleToggleUi}
          >Связаться
          </button>
        </div>
      </section>
      {toggle ? <Modal
        handleToggleUi={handleToggleUi}
        toggle={toggle}
      /> : null}
    </>
  )
}
export default Advertisement;
