import Image from 'next/image'
import Moon from '../assets/images/icon-moon.svg';
import Sun from '../assets/images/icon-sun.svg';
import Todo from '@/components/Todo';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-10 sm:p-24">
      <div className="title-container w-full sm:w-1/2 flex justify-between">
        <h2 className='uppercase font-bold text-2xl'>to do</h2>
        <Image src={Moon} alt='Moon-Icon' className='object-contain'/>
      </div>
      <Todo />
    </main>
  )
}
