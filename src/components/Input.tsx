import React from 'react'
type InputParam = {
  label: string, 
  value: string, 
  onChange: (newValue: string) => void
}

export const Input = ({label, value, onChange}:InputParam) => {
  return (
    <div className='flex flex-col items-start gap-0.5'>
        <label>{label}</label>
        <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)} 
        className='bg-gray-50 rounded-md border border-orange-500 text-gray-900'/>
    </div>
  )
}