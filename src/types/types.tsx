export interface AddEventRibbon{
    id:string
    title:string
    completed:boolean
}
export interface MainInitialState{
    list:AddEventRibbon[],
    loading:boolean,
    error:null | string
}
export interface ModalInitialState{
    mainToggle:boolean
    vacanciesToggle:boolean
    toggle:boolean
}
export interface NavActiveInitialState{
    aboutUsStatus:"О нас" | ""
    servicesStatus:"Услуги" | ""
    teamStatus: "Наша команда" | ""
    projectStatus: "Портфолио проектов" | ""
    partnersStatus: "Партнеры и клиенты" | ""
    vacanciesStatus: "Вакансии" | ""
    ribbonStatus: "Лента событий" | ""
    charityStatus: "Благотворительность" | ""
}