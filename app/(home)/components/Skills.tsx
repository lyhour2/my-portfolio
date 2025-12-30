"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiGit, SiJavascript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiSupabase, SiTailwindcss } from 'react-icons/si'


export default function Skills() {
     const skills = [

          {
               text: "React",
               Icon: SiReact,
          },

          {
               text: "Next.js",
               Icon: SiNextdotjs,
          },

          {
               text: "Tailwind",
               Icon: SiTailwindcss,
          },

          {
               text: "Postgresql",
               Icon: SiPostgresql,
          },

          {
               text: "Supabase",
               Icon: SiSupabase,
          },

          {
               text: "Node.js",
               Icon: SiNodedotjs,
          },

          {
               text: "Git",
               Icon: SiGit,
          },

          {
               text: "Javascript",
               Icon: SiJavascript,
          },

          {
               text: "Python",
               Icon: SiPython,
          },


     ]

  return (
     <div>
          <Title text="Skills 🎯" className=" flex flex-col items-center justify-center -rotate-6"/>

          <HoverEffect items={skills}/>

     </div>
     )
}
