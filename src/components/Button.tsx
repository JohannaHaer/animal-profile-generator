import React from 'react'
type ButtonParam = {
    text: string
    onClick: () => void
}

export const Button = ({text, onClick}: ButtonParam) => {
  return (
    <div>
        <button onClick={onClick}>{text}</button>
    </div>
  )
}