import s from '../Header/Header.module.scss'
import { FC, useState } from "react"
import { navItems } from "../../config"

interface NavbarProps {
    // handleToggleNav?: () => void
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
    const [active,setActive]=useState(-1)
    const lolo = (name: string,href:string, index: number, firstNum: number, secondNum: number) => {
        if (index < firstNum && index >= secondNum) {
            return (
                <a href={href} key={index}>{name}</a>
            )
        }
    }
 
    const newItems=navItems.map((el, index) => {
        
        return (
            <li
                key={index}
            >       
                <a
                    onClick={():void=>{setActive(index)}}
                    href={el.href}
                    className={active===index?s.navLink:''}
                >
                    {el.name}
                </a>
            </li>
        )
    })

    // console.log(one);
    return (
        <>
            {firstFooterNav ? navItems.map((el, index) => {
                return lolo(el.name, el.href, index, 3, 0)
            }) : null}
            {secondFooterNav ? navItems.map((el, index) => {
                return lolo(el.name,el.href, index, 6, 3)
            }) : null}
            {thirdFooterNav ? navItems.map((el, index) => {
                return lolo(el.name,el.href, index, 9, 6)
            }) : null}
            {headerNav ? newItems : null}
            {/* {headerNav ? navItems.map((el, index) => {
                
                return (
                    <li
                        key={index}
                    >
                        <a
                        onClick={():void=>{setActive(index)}}
                            href={el.href}
                            className={active===index?'ere':''}
                        >
                            {el.name}
                        </a>
                    </li>
                )
            }) : null} */}
           
        </>
    )
}
export default Navbar;
