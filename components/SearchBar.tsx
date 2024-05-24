"use client"
import { useState } from 'react'
import { SearchManufacture } from './SearchManufacture'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { SearchProps } from '@/type'
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
export const SearchBar = ( {setManufacture, setModel}:SearchProps) => {
    const [searchManufacturer, setSearchManufacture]= useState("");
    const [model, setmodel]= useState("");
    const route = useRouter();
    const handlesearch=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      if(searchManufacturer===""&&  model === "") {
        return alert("Plaese fill in the search bar")
      };
      setModel(model)
      setManufacture(searchManufacturer)
    }
   
  return (
    <form className='searchbar' onSubmit={handlesearch}>
    <div className='searchbar__item'>
      <SearchManufacture
        selected={searchManufacturer}
        setSelected={setSearchManufacture}
      />
      <SearchButton otherClasses='sm:hidden' />
    </div>
    <div className='searchbar__item'>
      <Image
        src='/model-icon.png'
        width={25}
        height={25}
        className='absolute w-[20px] h-[20px] ml-4'
        alt='car model'
      />
      <input
        type='text'
        name='model'
        value={model}
        onChange={(e) =>setmodel(e.target.value)}
        placeholder='Tiguan'
        className='searchbar__input'
      />
      <SearchButton otherClasses='sm:hidden' />
    </div>
    <SearchButton otherClasses='max-sm:hidden' />
  </form>
  )
}
