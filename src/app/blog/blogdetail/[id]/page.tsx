import React, { Fragment } from 'react'
import { blog } from '../../blog';

const page = ({params}:{params: {id:any}}) => {
    const blogFilter = blog.filter((item:any)=>item.id == params.id)
  return (
    <div className='p-40'>
        {blogFilter.map((item:any)=>(
            <div>{item.title}</div>
        ))}
    </div>

  )
}

export default page
