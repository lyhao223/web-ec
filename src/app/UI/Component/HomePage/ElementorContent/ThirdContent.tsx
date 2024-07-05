import React from 'react'
import banner from '../../../../../../assets/content/banner.jpg'
import Button from '@/app/UI/Reusable/Button'
import Gesture from '@/app/UI/Animation/Gesture'

const ThirdContent = () => {
  return (
    <section id='third__content' className='mt-16'>
        <div className="flex xl:flex-row 2xl:flex-row lg:flex-row flex-col xl:items-start xl:justify-start lg:items-center lg:justify-center items-center justify-center xl:space-x-72 overflow-hidden">
            <img src={banner.src} alt="banner" className="xl:w-1/2 w-full h-1/2"/>
            <div className='flex flex-col xl:items-start xl:justify-start items-center justify-center xl:mt-52 mt-10 space-y-8 mb-4'>
                <h1 className='xl:text-5xl text-3xl xl:w-96 w-64 font-medium subpixel-antialiased'>An Unobtrusive, Innovative With A True Beauty!</h1>
                <p className='w-96 text-gray-400 xl:text-start text-center tracking-wide leading-tight'>We believe in creating unique products, so we use finest materials and stunning design to create special items.</p>
                <Gesture scaleHover={1.1}><Button>Learn More</Button></Gesture>
            </div>
        </div>
    </section>
  )
}

export default ThirdContent