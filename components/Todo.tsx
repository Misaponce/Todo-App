'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import CustomInput from './CustomInput'
import CloseIcon from '../assets/images/icon-cross.svg';
import CheckIcon from '../assets/images/icon-check.svg';
import { ItemType } from '@/types';
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {


  const [todos, setTodos] = useState<ItemType[]>([]);
  const [input, setInput] = useState<string>('');
  const [displayTodos, setDisplayTodos] = useState<ItemType[]>([]);

  // Load todos from local storage when the component mounts

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');

    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
      setDisplayTodos(JSON.parse(savedTodos))
    }
  }, []);

  // Save todos to local storage whenever they change

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    // Updating displaytodos whenever todos change
    setDisplayTodos(todos)
  }, [todos]);

  const handleTodoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  }

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    setInput('');

    const newTodo: ItemType = {id: uuidv4(), text:input, completed:false}
    
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

 const handleFilterCompletedItem = () => {
  setDisplayTodos(todos.filter((todo) => todo.completed)
  )
 }

 const handlerFilterActiveItems = () => {
  setDisplayTodos(todos.filter((todo) => !todo.completed))
 }

 const handleFilterAllItems = () => {
  setDisplayTodos(todos)
 }

 const handleClearCompleteItems = () => {
  setDisplayTodos(todos.filter((todo) => !todo.completed))
 }

  return (
    <div className="todo-wrapper flex flex-col w-full sm:w-2/5 sm:mt-4">
      <form onSubmit={handleSubmitForm}>
        <CustomInput
          type='text'
          value={input}
          placeHolder='Create a new todo...'
          onChange={handleTodoInput}
        />
      </form>
      <ul className='mt-4 rounded-t-lg overflow-hidden'>
        {displayTodos.map((todo) => (
          <li key={todo.id} 
            className={` 
            flex justify-between items-center todo-item
            p-4 border-b-2 border-gray-700`}>
            {/* Completed Item */}
            <div onClick={() => {handleCompleteItem(todo.id)}} className={`${todo.completed ? 'line-through todo-item-completed' : ''} flex cursor-pointer`}>
              <div className={`${todo.completed ? 'bg-gradient-to-br from-blue-500 to-pink-500' : ''} rounded-full border-2 flex justify-center items-center p-1`}>
                <Image src={CheckIcon} alt='Check-Icon' className='object-contain w-3 h-3'/>
              </div>
              <span className='flex-1 ms-2 cursor-pointer select-none'>
                {todo.text}
              </span>
            </div>
            {/* Delete Item */}
            <div onClick={() => handleDeleteItem(todo.id)} className='ml-auto opacity-70 hover:opacity-100'>
              <Image src={CloseIcon} alt='Close-icon' className='object-contain w-3 h-3 cursor-pointer'/>
            </div>
          </li>
        ))}
      </ul>
      <div className='p-4 bottom-display-options w-full rounded-b-md flex justify-between'>
        <span className='select-none'>
          {displayTodos.filter((todo) => !todo.completed).length} Items Left
        </span>
        <button onClick={handleClearCompleteItems}>Clear All Completed</button>
      </div>
      <div className='flex justify-center gap-8 bottom-menu mt-3 p-4 rounded-lg'>
        <button onClick={handleFilterAllItems}>All</button>
        <button onClick={handlerFilterActiveItems}>Active</button>
        <button onClick={handleFilterCompletedItem}>Complete</button>
      </div>
    </div>
  )
}

export default Todo