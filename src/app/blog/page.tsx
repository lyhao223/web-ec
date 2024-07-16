import React from 'react'
import {blog} from './blog'
const page = () => {
  return (
    <div className='flex justify-center my-12 p-12'>
      {blog.map((item)=>(
        <div className='flex flex-col items-center justify-center p-4'>
          <img src={item.image} alt={item.title} className='w-96 h-96'/>
          <h1 className='text-2xl font-semibold'>{item.title}</h1>
          <p className='text-sm'>{item.time}</p>
          <p className='text-sm'>{item.content}</p>
        </div>
      ))}
    </div>
  )
}

export default page
