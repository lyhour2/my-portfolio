import { MovingBorderBtn } from '@/components/ui/moving-border'
import Link from 'next/link'
import React from 'react'
import Title from './Title'

export default function Herosection() {
  return (
    <div className=' min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between'>
     <div className='space-y-10 text-center lg:text-left'> 
          <h1 className='text-4xl lg:text-7xl font-bold'>
               Nice to meet you! 🚀
               <br/> <span className='underline underline-offset-8 decoration-pink-500'> {"I'm Lihour."}</span>
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
          <div className='h-72 w-72 space-y-3 -rotate-[30deg] relative'>
               <div className='flex gap-3 translate-x-8'>
                    <div className='w-32 h-32 rounded-2xl bg-indigo-500'></div>
                    <div className='w-32 h-32 rounded-full bg-pink-500'></div>

                    

               </div>
               <div className='flex gap-3 -translate-x-8'>
                    <div className='w-32 h-32 rounded-2xl bg-pink-500'></div>
                    <div className='w-32 h-32 rounded-full bg-indigo-500'></div>
               </div>
               <div className='glow absolute top-[40%] right-1/2 -z-10'>

               </div>

          </div>

          <div className=" absolute buttom-5 sm:bottom-14 left-0 sm: -left-10 ">

          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
               <p>💬 Available for Work</p>
          </MovingBorderBtn>
          </div>


     </div>
    </div>
  )
}
