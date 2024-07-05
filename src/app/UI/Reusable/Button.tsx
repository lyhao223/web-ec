import React from 'react'
interface ButtonProps {
    onClick?: () => void
    children?: React.ReactNode
}
const Button = ({onClick, children}:ButtonProps) => {
  return (
     <button
        className="border p-3 border-black w-56 transition-all duration-200 hover:text-white hover:bg-black ease-linear"
        onClick={onClick}>
        {children}
    </button>
  )
}

export default Button
