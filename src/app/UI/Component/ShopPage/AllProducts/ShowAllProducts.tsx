import React from 'react'

interface ProductsProps {
    id: number;
    title: string;
    price: number;
    image: string;
}
const ShowAllProducts = ({id, title, price, image}: ProductsProps) => {
  return (
    <div className='flex flex-col items-center justify-center space-y-10' key={id}>
        <img src={image} alt={title} className='w-full h-56'/>
        <h2 className='text-black text-sm text-nowrap truncate w-56 text-center'>{title}</h2>
        <p className='text-black text-lg'>{price}$</p>
    </div>
  )
}

export default ShowAllProducts
