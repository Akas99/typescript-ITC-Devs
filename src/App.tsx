import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import Advertisement from './components/Advertisement/Advertisement'
import Amount from './components/Amount/Amount'
// import Answers from './components/Answers/Answers'
import Charity from './components/Charity/Charity'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Partners from './components/Partners/Partners'
import Projects from './components/Projects/Projects'
import Ribbon from './components/Ribbon/Ribbon'
import Services from './components/Services/Services'
import Team from './components/Team/Team'
import Technologies from './components/Technologies/Technologies'
import Vacancies from './components/Vacancies/Vacancies'


export default function App() {
  
  
  return (
    <div>
      <Header />
      <Main />
      <Amount />
      <AboutUs />
      <Services />
      <Projects />
      <Partners />
      {/* <Answers/> */}
      <Technologies />
      <Ribbon />
      <Advertisement />
      <Team />
      <Vacancies />
      <Charity />
      <Contacts />
      <Advertisement second />
      <Footer />


    </div>
  )
}
