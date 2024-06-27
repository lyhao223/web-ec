import React from 'react'
interface ICustomDotsProps {
    onClick?: () => void;
    active?: boolean;
}
const CustomDots = ({onClick, active }: ICustomDotsProps) => {
    
  return (
    <li
      className={`rounded-full bg-black ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      
    </li>
  )
}

export default CustomDots
