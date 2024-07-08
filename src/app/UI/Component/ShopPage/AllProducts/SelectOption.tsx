import React from 'react'

interface SelectOptionProps {
    optionValue: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    children: React.ReactNode;
}
const SelectOption = ({optionValue, onChange, children}: SelectOptionProps) => {
  return (
    <div className='border-black border-2'>
        <select value={optionValue} onChange={onChange} className='p-3'>
            {children}
        </select>
    </div>
  )
}

export default SelectOption