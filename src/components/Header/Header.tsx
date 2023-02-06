import { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { handleToggle } from '../../store/slicers/modalSlice'
import s from './Header.module.scss'
import logo from '../../assets/images/logo.svg'
import Modal from '../Modal/Modal'
import Navbar from '../Navbar/Navbar'

export default function Header() {
  const [nav, setNav] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const { toggle } = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch()
  const handleToggleUi = ():void => {
    dispatch(handleToggle())
  }
  const handleScroll = ():void => {
    const position = window.scrollY
    setScrollPosition(position)
  }
  const handleToggleNav = ():void => {
    setNav(prev => !prev)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return ():void => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <>
      <header className={scrollPosition < 14 ? s.header : s.header__scroll}>

        <div className={`container ${s.header__container}`}>
          <a href="#main"><img src={logo} alt="" /></a>
          <button
            onClick={handleToggleUi}
          >Контакты
          </button>
          <div className={s.header__wrapper}>
            <select>
              <option value="">RU</option>
              <option value="">EN</option>
            </select>
          </div>
          <div
            onClick={handleToggleNav}
            className={!nav ? `${s.mobileBtn}` : `${s.mobileBtn} ${s.showMobileBtn}`}
          >
            <span></span>
          </div>
        </div>

        <div className={s.header__nav}>
          <ul className={!nav ? `${s.nav}` : `${s.nav} ${s.showNav}`}>
            <Navbar
              headerNav
            />
          </ul>
        </div>

      </header>
      {toggle ? <Modal
        handleToggleUi={handleToggleUi}
        toggle={toggle}
      /> : null}
    </>
  )
}
