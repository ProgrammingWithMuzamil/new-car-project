import { ShowMore } from '@/components/index';
import { MouseEventHandler } from "react";

export interface CustomButtonPropes{
    title: string,
    containerStyle?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?:string,
    rightIcon?:string,
    isDisabled?: boolean
}

export interface SearchManufacturerProps{
    selected: string
    setSelected: any
}

export interface CarProps{
    city_mpg:number;
class:string;
combination_mpg:number;
cylinders:number;
displacement:number;
drive:string
fuel_type:string;
highway_mpg:number;
make:string;
model:string;
transmission:string;
year:number;
}
export interface filterProps{
    manufacturer:string,
    year:number
    fuels:string
    limit:number
    model:string
}
export interface OptionsProps{
    title:string
    value:string
}
export interface SearchbarProps{
    title:string
    option: OptionsProps[]
    setFilter:any
}

export interface ShowMoreProps{
    pageNumber:number
    isNext: boolean
    setLimit: any
}
export interface SearchProps{
    setManufacture:any
    setModel:any
}