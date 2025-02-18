import Link from 'next/link';
import React from 'react'
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";


export default function Navbar() {
     const socails = [
          {
               link : "https://www.linkedin.com/in/lihour-phon-1949b6270/",
               label : "LinkedIn",
               Icon : SiLinkedin,
          },
          {
               link : "https://www.linkedin.com/in/lihour-phon-1949b6270/",
               label : "GitHub",
               Icon : SiGithub
          },
          {
               link : "https://www.linkedin.com/in/lihour-phon-1949b6270/",
               label : "FaceBook",
               Icon : SiFacebook,
          }

     ]

  return (
    <nav className='py-10 flex justify-between items-center'>
     <h1 className='text-2xl font-bold underline underline-offset-8 decoration-pink-500 -rotate-2'>PhonLihour 👩🏻‍💻</h1>
     <div className='flex items-center gap-5'>
          {socails.map((socails,index)=>{
               const Icon = socails.Icon
               
               return <Link href={socails.link} key={index} aria-label = {socails.label}>
                    <Icon className='w-5 h-5 hover:scale-125 transition-all'/>

               </Link>
          })}
     </div>
    </nav>
  )
}
