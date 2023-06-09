"use client"
import Image from 'next/image';

import { CustomButtonProps } from '@/types';

const CustomButton = ({ title, containerStyles, handleClick, buttonType }: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={buttonType || "button"}
            className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
            onClick={handleClick}
        >   
            <span className={`flex-1  `}>
                {title}
            </span>
            
        </button>
    )
}

export default CustomButton