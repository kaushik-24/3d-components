import React from 'react'
import { Kavoon } from 'next/font/google'

const kavoon = Kavoon({
  subsets: ["latin"],
  weight: "400",
})
const Hero = () => {
  return (
    <>
    <section className='mt-[36vh]'>
    <div className=' flex flex-col justify-center items-center '>
    <div className={`${kavoon.className} text-7xl md:text-[14vh] lg:text-[18vh]`}>3<span className='text-[#901430] font-extrabold'>D</span>ee
    </div>
    <p className='m-6'>
    This is just a page to showcase my 3D models. Ready-to-implement using three.js.
    </p>
    <div className='flex flex-row  '>
<button className="button" data-text="Awesome">
    <span className="actual-text">&nbsp;DOCS&nbsp;</span>
    <span aria-hidden="true" className="hover-text">&nbsp;DOCS&nbsp;</span>
</button>
   <button className="button " data-text="Awesome">
    <span className="actual-text">&nbsp;Components&nbsp;</span>
    <span aria-hidden="true" className="hover-text">&nbsp;Components&nbsp;</span>
</button> 
    </div>
    </div>
    </section>
    </>
  )
}

export default Hero
