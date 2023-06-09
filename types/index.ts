import { MouseEventHandler } from "react"


export interface OptionProps {
    title: string;
    value: string;
  }
  
export interface CustomButtonProps {
    title: string,
    containerStyles? : string,
    handleClick?: MouseEventHandler<HTMLButtonElement>
    buttonType?: "button" | "submit"
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
  }

export interface SearchManuFacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
  }