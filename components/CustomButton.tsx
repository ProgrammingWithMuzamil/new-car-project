"use client"
import { CustomButtonPropes } from '@/type'
import Image from 'next/image'
import React from 'react'

export const CustomButton = ({title,btnType,textStyles,rightIcon,isDisabled, containerStyle, handleClick }:CustomButtonPropes) => {
  return (
    <button
    disabled={false}
    type={btnType ||"button"}
    className={`custom-btn ${containerStyle}`}
    onClick={handleClick}>
        <span className={`flex-1 ${textStyles}`}>
           {title}
        </span>
        {rightIcon && (
          <div className='relative w-6 h-6'>
            <Image src={rightIcon}
            alt="right icon"
            fill
            className='object-contain'/>
          </div>
        )}
    </button>

  )
}
