'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import CloseIcon from '../assets/images/icon-cross.svg';
import CheckIcon from '../assets/images/icon-check.svg';
import { ItemType } from '@/types';
import TodoForm from './TodoForm';

const Todo = () => {

  // setting todos variable state of type ItemType with initial value of []
  const [todos, setTodos] = useState<ItemType[]>([]);
  // defining a secondary todos to display so the original array is not modified
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


  const handleSubmitForm = (todo: ItemType) => {
    // making sure no blank spaces are added as a new 'todo'
    if(todo.text.trim()) {
      todo.text = todo.text.trim()
      setTodos([todo, ...todos])
    }
  }

  // compare if the id of the todo matches the id passed as an argument
  // and change the value of completed if so
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

//  filter all todo objects in the todos array that does not match (!==) 
// the id passed as argument to the function
 const handleDeleteItem = (id:string) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
 };

//  filter all objects in the todos array that has completed as true
// and set the value to setDisplayTodos so main array wont change
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
  setTodos(todos.filter((todo) => !todo.completed))
 }

  return (
    <div className="todo-wrapper flex flex-col w-full sm:w-2/5 mt-auto sm:mt-4">
      <TodoForm onSubmit={handleSubmitForm}/>
      <ul className='mt-4 rounded-t-lg overflow-hidden'>
        {displayTodos.map((todo) => (
          <li key={todo.id} 
            className={` 
            flex justify-between items-center todo-item
            p-4 border-b-2 border-gray-700 cursor-move`} draggable>
            {/* Completed Item */}
            <div onClick={() => {handleCompleteItem(todo.id)}} className={`${todo.completed ? 'line-through todo-item-completed' : ''} flex items-center cursor-pointer`}>
              <div className={`${todo.completed ? 'bg-gradient-to-br from-blue-500 to-pink-500' : ''} rounded-full border-2 flex justify-center items-center w-5 h-5 circle-item`}>
                {todo.completed && <Image src={CheckIcon} alt='Check-Icon' className='object-contain'/>}
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
        {todos.filter((todo) => todo.completed).length > 0 ? <button onClick={handleClearCompleteItems}>Clear All Completed</button> : <span>No Completed Items</span>}
      </div>
      <div className='flex justify-center gap-8 bottom-menu mt-3 p-4 rounded-lg'>
        <button onClick={handleFilterAllItems}>All</button>
        <button onClick={handlerFilterActiveItems}>Active</button>
        <button onClick={handleFilterCompletedItem}>Completed</button>
      </div>
    </div>
  )
}

export default Todo