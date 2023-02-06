import { FC, useState } from "react"
import { navItems } from "../../config"
import { useAppDispatch, useAppSelector } from '../../hooks'
import s from '../Header/Header.module.scss'




interface NavbarProps {
    firstFooterNav?: boolean
    headerNav?: boolean
    secondFooterNav?: boolean
    thirdFooterNav?: boolean
}

const Navbar: FC<NavbarProps> = ({
    firstFooterNav,
    headerNav,
    secondFooterNav,
    thirdFooterNav,
}) => {
    const dispatch = useAppDispatch()
    const { aboutUsStatus, servicesStatus, teamStatus, projectStatus, partnersStatus, vacanciesStatus, ribbonStatus, charityStatus } = useAppSelector(state => state.navActive)
    const [active, setActive] = useState(-1)
    const lolo = (name: string, href: string, index: number, firstNum: number, secondNum: number) => {
        if (index < firstNum && index >= secondNum) {
            return (
                <a href={href} key={index}>{name}</a>
            )
        }
    }


    const newItems = navItems.map((el, index) => {

        return (
            <li
                key={index}
            >
                <a
                    onClick={(): void => { setActive(index) }}
                    href={el.href} 
                    className={aboutUsStatus === el.name 
                        || servicesStatus===el.name
                        || teamStatus===el.name
                        || projectStatus===el.name
                        || partnersStatus===el.name
                        || vacanciesStatus===el.name
                        || ribbonStatus===el.name
                        ||charityStatus===el.name
                        ? s.navLink 
                        : ''}
                >
                    {el.name}
                </a>
            </li>
        )
    })

    return (
        <>
            {firstFooterNav ? navItems.map((el, index) => {
                return lolo(el.name, el.href, index, 3, 0)
            }) : null}
            {secondFooterNav ? navItems.map((el, index) => {
                return lolo(el.name, el.href, index, 6, 3)
            }) : null}
            {thirdFooterNav ? navItems.map((el, index) => {
                return lolo(el.name, el.href, index, 9, 6)
            }) : null}
            {headerNav ? newItems : null}
        </>
    )
}
export default Navbar;
