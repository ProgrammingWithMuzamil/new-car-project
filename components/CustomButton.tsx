"use client"
import { CustomButtonPropes } from '@/type'
import React from 'react'

export const CustomButton = ({title,btnType, containerStyle, handleClick }:CustomButtonPropes) => {
  return (
    <button
    disabled={false}
    type={btnType ||"button"}
    className={`custom-btn ${containerStyle}`}
    onClick={handleClick}>
        <span className={`flex-1`}>
           {title}
        </span>
    </button>

  )
}
