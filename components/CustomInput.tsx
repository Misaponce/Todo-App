import { CustomInputProps } from '@/types'
import React from 'react'

const CustomInput = ({ type, placeHolder, onChange, value }: CustomInputProps) => {
  return (
    <input 
      type={type} 
      value={value}
      placeholder={placeHolder} 
      className='custom-input p-4 w-full rounded-lg'
      onChange={onChange}/>
  )
}

export default CustomInput