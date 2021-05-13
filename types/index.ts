export type ICountry = {
    name: string
    latlng: number[]
    population: number
}

export interface IState {
    searchItems: string[]
    searchDetails: ICountry[]
}