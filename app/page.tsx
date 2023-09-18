'use client'

import Image from 'next/image'
import Moon from '../assets/images/icon-moon.svg';
import Sun from '../assets/images/icon-sun.svg';
import Todo from '@/components/Todo';
import { useState } from 'react';

export default function Home() {

  const [iconMode, setIconMode] = useState(Moon)

  const handleColorMode = () => {iconMode === Moon ? setIconMode(Sun) : setIconMode(Moon)}

  return (
    <main className={`${iconMode === Moon ? 'dark-mode' : 'light-mode'} flex min-h-screen flex-col items-center justify-around p-10 sm:p-24`}>
      <div className="title-container w-full sm:w-2/5 flex justify-between sm:mb-4">
        <h2 className='uppercase font-bold text-2xl'>to do</h2>
        <button onClick={handleColorMode}>
          <Image src={iconMode} alt='Moon-Icon' className='object-contain'/>
        </button>
      </div>
      <Todo />
    </main>
  )
}
