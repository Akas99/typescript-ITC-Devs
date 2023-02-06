import s from './Footer.module.scss'
import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import Navbar from '../Navbar/Navbar'


export default function Footer() {

    return (
        <footer id='footer' className={s.footer}>
            <div className="container">
                <div className={s.footer__up}>


                    <img src={logo} alt="" />
                    <div>
                        {/* <p>О нас</p>
                        <p>Вакансии</p>
                        <p>Услуги</p> */}
                        <Navbar
                            firstFooterNav
                        />
                    </div>
                    <div>
                        {/* <p>Портфолио</p>
                        <p>Наша команда</p>
                        <p>Партнеры и клиенты</p> */}
                        <Navbar
                            secondFooterNav
                        />
                    </div>
                    <div>
                        {/* <p>Благотварительность</p>
                        <p>Лента событий</p>
                         */}
                        <Navbar
                            thirdFooterNav
                        />
                        <br/>
                    </div>
                    <div className={s.footer__icons}>
                        <div><img src={facebook} alt="" /></div>
                        <div><img src={twitter} alt="" /></div>
                        <div><img src={instagram} alt="" /></div>
                    </div>
                </div>
                <div className={s.footer__down}>
                    <p>© 2022 ITC devs. Все права защищены.</p>
                    <p>Политика конфиденциальности</p>
                </div>
            </div>
        </footer>
    )
}
