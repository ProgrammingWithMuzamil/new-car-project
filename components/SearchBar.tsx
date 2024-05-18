"use client"
import { useState } from 'react'
import { SearchManufacture } from './SearchManufacture'

export const SearchBar = () => {
    const [manufacturer, setmanufacture]= useState("");
    const handlesearch=()=>{}
  return (
    <form className='searchbar' onSubmit={handlesearch}>
        <div className='searchbar__item'>
           <SearchManufacture
           manufacturer={manufacturer}
           setmanufacture={setmanufacture} />
        </div>
    </form>
  )
}
