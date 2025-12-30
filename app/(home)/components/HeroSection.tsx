import { MovingBorderBtn } from '@/components/ui/moving-border'
import Link from 'next/link'
import React from 'react'
import Title from './Title'

export default function Herosection() {
  return (
    <div className=' min-h-[60vh] flex flex-col-reverse gap-6 lg:gap-10 lg:flex-row items-center justify-center'>
     <div className='space-y-10 text-center lg:text-left lg:ml-20 lg:-mt-20'> 
          <h1 className='text-4xl lg:text-7xl font-bold'>
               LIHOUR PHON 👩🏻‍💻
               {/* <br/> <span className='underline underline-offset-8 decoration-pink-500'> {"I'm Lihour."}</span> */}
          </h1>
          <p className='md:w-96 text-lg text-gray-300'>
              { 
              "Based in Cambodia, I'm Data Science and Engineering student at RUPP."
              }
          </p>
          <Link href={"mailto:lhour8529@gmail.com"} className='inline-block'>
          
          <Title text="Contact Me 📬"/>
          
          </Link>
     </div>

     <div className=" relative">
          <div className="relative lg:-top-2 lg:-left-8 h-90 w-72 lg:ml-20">
               <MovingBorderBtn borderRadius="1rem" className="p-0" >
                    <img
                    src="/my-image.png"
                    alt="Hero Image"
                    className="h-full w-full object-cover"
                    />
               </MovingBorderBtn>
          </div>
     </div>
     
    </div>
  )
}
