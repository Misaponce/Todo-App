import { CustomInputProps } from '@/types'
import React from 'react'

const CustomInput = ({ type, placeHolder }: CustomInputProps) => {
  return (
    <input type={type} placeholder={placeHolder} className='custom-input px-4 py-2'/>
  )
}

export default CustomInput