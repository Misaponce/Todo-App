import Image from 'next/image'
import Moon from '../assets/images/icon-moon.svg';
import Sun from '../assets/images/icon-sun.svg';
import CustomInput from '@/components/CustomInput';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-10 sm:p-24">
      <div className="title-container w-full sm:w-1/2 flex justify-between">
        <h2 className='uppercase font-bold text-2xl'>to do</h2>
        <Image src={Moon} alt='Moon-Icon' className='object-contain'/>
      </div>
      <div className="todo-wrapper flex flex-col w-full h-full">
        <CustomInput
          type='text'
          placeHolder='Create a new todo...'
        />
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
        <h4>
          All Active Completed
        </h4> 
      </div>
    </main>
  )
}
