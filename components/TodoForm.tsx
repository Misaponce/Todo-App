import React, {useState} from 'react'
import { ItemType, TodoFormProps } from '@/types';
// To assign unique ID
import { v4 as uuidv4 } from 'uuid';

const TodoForm: React.FC<TodoFormProps> = ({onSubmit}: TodoFormProps) => {

  const [input, setInput] = useState<string>('');

  // Taking what the user has input
    const handleTodoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.currentTarget.value);
    }

  // When submit is trigger, the input goes back to blank,
  // the input is print on console to make sure is working
  // and a new todo is sent of type ItemType with and id, text and completed value
    const handleSubmitForm = (event: React.FormEvent) => {
      event.preventDefault();
      setInput('');
      console.log('New Todo Added 🎉🎉🎉');

      const newTodo: ItemType = {id: uuidv4(), text:input, completed:false};

      onSubmit(newTodo);
    }

  return (
    <form onSubmit={handleSubmitForm}>
      <input 
        type='text'
        placeholder='New Todo...'
        onChange={handleTodoInput}
        value={input}
        className='custom-input p-4 w-full rounded-lg' 
      />
    </form>
  )
}

export default TodoForm