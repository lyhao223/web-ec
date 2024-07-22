import Link from 'next/link'
import React from 'react'

const RecentBlog = ({blog}:any) => {
  return (
    <div className='xl:mt-52 mt-10 flex flex-col items-start justify-start space-y-4'>
        <h1 className='text-2xl subpixel-antialiased tracking-wide font-medium'>
            Recent Blog
        </h1>
      {blog.map((item:any)=>(
        <Link href={`/blog/blogdetail/${item.id}`} className='flex flex-row items-start justify-start space-y-2 space-x-3' key={item.id}>
            <img src={item.image} alt={item.title} className='w-20 h-20'/>
            <div className='flex flex-col items-start justify-start space-y-2'>
                <h1 className='text-sm subpixel-antialiased tracking-wide font-medium truncate w-40'>
                    {item.title}
                </h1>
                <p className='text-sm text-gray-500'>
                    {item.time}
                </p>
            </div>
        </Link>
      ))}
    </div>
  )
}

export default RecentBlog
