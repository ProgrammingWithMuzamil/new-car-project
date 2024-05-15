import { MouseEventHandler } from "react";

export interface CustomButtonPropes{
    title: string,
    containerStyle?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}