"use client"
import { Fragment, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Listbox,Transition } from '@headlessui/react'
import { SearchbarProps } from '@/type'
import Image from 'next/image'
import { updateSearchParams } from '@/utils'
export const CustomFilter = ({title, option ,setFilter}: SearchbarProps) => {
  const [selected, setselected] = useState(option[0]);
  

  return (
    <div className='w-fit'>
      <Listbox
      value={selected}
      onChange={(e)=>{
        setselected(e);
        setFilter(e.value);
      }}>
        <div className='relative w-fit z-10'>
          <Listbox.Button className="custom-filter__btn">
            <span className='block truncate'>{selected.title}</span>
            <Image  src="/chevron-up-down.svg"
            alt='chevron up down'
            width={20}
            height={20}
            className='ml-40 object-contain'/>
          </Listbox.Button>
          <Transition as={Fragment}
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
            <Listbox.Options className="custom-filter__options">
              {option.map((options)=>(
                <Listbox.Option 
                key={options.title}
                value={options}
                className={({active})=>`relative cursor-default select-none py-2 px-4
                 ${active ? "bg-primary-blue text-white": "text-gray-900"}`}
                >
                  {({selected})=>(
                    <span className={`block truncate ${selected? "font-medium" : "font-normal"}`}>
                      {options.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>

          </Transition>

        </div>
      </Listbox>

    </div>
  )
}
