import { Link } from '@mui/material'
import React, { Fragment } from 'react'

const categories = ['Fashion', 'DENIUM', 'INDUSTRY', 'STYLE', 'LIFESTYLE', 'DESIGN', 'CHANGE', 'CLOTHES', 'GOLD', 'HANDMADE']
const Categories = () => {
  return (
    <div className='flex flex-col items-start justify-start space-y-2'>
        <h1 className='text-3xl subpixel-antialiased tracking-wide font-medium'>
            Categories
        </h1>
        {categories.map((item: any) => (
            <Link href='/' key={item} className='no-underline'>
                <span className='text-black text-lg no-underline'>
                    {item}
                </span>
            </Link>
            
        ))}
    </div>
  )
}

export default Categories
