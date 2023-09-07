'use client'

import React, { useState } from 'react'
import CustomInput from './CustomInput'
import { ItemType } from '@/types';
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {

  const id = uuidv4();

  const [todos, setTodos] = useState<ItemType[]>([]);
  const [input, setInput] = useState<string>('');

  const handleTodoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  }

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();

    const newTodo: ItemType = {id:id, text:input, completed:false}
    setTodos([...todos, newTodo])
  }

 const handleCompleteItem = (id:string) => {
  setTodos(
    todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed};
      }
      return todo;
    })
  )
 }

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
          <li key={todo.id} onClick={() => {handleCompleteItem}} className={`${todo.completed ? 'line-through' : ''}`}>{todo.text}</li>
        ))}
      </ul>
      <h4>
        All Active Completed
      </h4> 
    </div>
  )
}

export default Todo