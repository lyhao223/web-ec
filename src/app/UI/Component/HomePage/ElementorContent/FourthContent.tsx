import React from 'react'
import { LuQuote } from "react-icons/lu";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
interface deviceType {
  deviceType?: string; // or the appropriate type for your deviceType
}
const FourthContent = ({deviceType}:deviceType) => {
    const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id='fourth__content' className='mt-24'>
        <div className='flex items-center justify-center'>
            <LuQuote size={70}/>
        </div>
        <Carousel responsive={responsive} autoPlay={true} infinite={true} itemClass="mb-12 text-center" arrows={true} removeArrowOnDeviceType={["mobile"]} showDots={deviceType!=='mobile'}  className='xl:mt-12 mt-4' deviceType={deviceType}>
            <div className='mt-12'>
                <p className='text-center xl:text-2xl '>
                    1.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. D
                    uis vulputate commodo.
                </p>
            </div>
            <div className='mt-12'>
                <p className='text-center xl:text-2xl '>
                    2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. 
                    Duis vulputate commodo.
                </p>      
            </div>
             <div className='mt-12'>
                <p className='text-center xl:text-2xl '>
                    3.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. 
                    Duis vulputate commodo.
                </p>      
            </div>
             <div className='mt-12'>
                <p className='text-center xl:text-2xl '>
                    4.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. 
                    Duis vulputate commodo.
                </p>      
            </div>
        </Carousel>
    </section>
  )
}

export default FourthContent