import { CustomInputProps } from '@/types'
import React from 'react'

const CustomInput = ({ type, placeHolder, onChange, value }: CustomInputProps) => {
  return (
    <input 
      type={type} 
      value={value}
      placeholder={placeHolder} 
      className='custom-input px-4 py-2 w-full'
      onChange={onChange}/>
  )
}

export default CustomInput