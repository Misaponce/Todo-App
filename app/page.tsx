'use client'

import Image from 'next/image'
import Moon from '../assets/images/icon-moon.svg';
import Sun from '../assets/images/icon-sun.svg';
import Todo from '@/components/Todo';
import useLocalStorage from 'use-local-storage';
import { useState } from 'react';
import Footer from '@/components/Footer';

export default function Home() {

  // Default value for theme is dark
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  const [iconMode, setIconMode] = useState(Sun)

  const switchTheme = () => {
    // if theme value === light then on click change to dark and viceversa
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    const newIcon = iconMode === Sun ? Moon : Sun;
    setIconMode(newIcon);
  }


  return (
    <main className={`min-h-screen flex flex-col items-center p-10 pb-0 sm:p-24 sm:pb-0`} data-theme={theme}>
      <div className="title-container w-full sm:w-2/5 flex justify-between sm:mb-4">
        <h2 className='uppercase font-bold text-2xl select-none'>to do</h2>
        <button onClick={switchTheme}>
          <Image src={iconMode} alt='Moon-Icon' className='object-contain'/>
        </button>
      </div>
      <Todo />
      <Footer />
    </main>
  )
}
