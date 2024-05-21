"use client"
import { useState } from 'react'
import { SearchManufacture } from './SearchManufacture'
import Image from 'next/image'

const SearchButton= ({otherClasses}:{otherClasses:string})=>{
  return (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
     <Image
     src="/magnifying-glass.svg"
     alt='magnifying glass'
     width={40}
     height={40}
     className='object-contain'
     />
    </button>
  );
}
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
        <SearchButton otherClasses="sm:hidden "/>
    </form>
  )
}
