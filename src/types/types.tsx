export interface AddEventRibbon{
    id:string
    title:string
    completed:boolean
}
export interface InitialState{
    mainToggle:boolean
    vacanciesToggle:boolean
    toggle:boolean
    list:AddEventRibbon[],
    loading:boolean,
    error:null | string
}