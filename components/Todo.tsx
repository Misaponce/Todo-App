'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import CustomInput from './CustomInput'
import CloseIcon from '../assets/images/icon-cross.svg';
import CheckIcon from '../assets/images/icon-check.svg';
import { ItemType } from '@/types';
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {


  const [todos, setTodos] = useState<ItemType[]>([]);
  const [input, setInput] = useState<string>('');

  const handleTodoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  }

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    setInput('');

    const newTodo: ItemType = {id: uuidv4(), text:input, completed:false}
    console.log(newTodo.id)
    
    setTodos([...todos, newTodo])
  }

 const handleCompleteItem = (id:string) => {
  setTodos(
    todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })
  )
 }

 const handleDeleteItem = (id:string) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
 };

  return (
    <div className="todo-wrapper flex flex-col w-full">
      <form onSubmit={handleSubmitForm}>
        <CustomInput
          type='text'
          value={input}
          placeHolder='Create a new todo...'
          onChange={handleTodoInput}
        />
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={`${todo.completed ? 'line-through' : ''} flex justify-between items-center m-4`}>
            <div onClick={() => {handleCompleteItem(todo.id)}} className='rounded-full border-2 flex justify-center items-center p-1 cursor-pointer'>
              <Image src={CheckIcon} alt='Check-Icon' className='object-contain w-3 h-3'/>
            </div>
            <span className='flex-1 ms-2'>
              {todo.text}
            </span>
            <div onClick={() => handleDeleteItem(todo.id)} className='ml-auto'>
              <Image src={CloseIcon} alt='Close-icon' className='object-contain w-3 h-3 cursor-pointer'/>
            </div>
          </li>
        ))}
      </ul>
      <h4>
        All Active Completed
      </h4> 
    </div>
  )
}

export default Todo