import Contact from '@/app/components/contact/page'
import Experience from '@/app/components/experience/page'
import Hero from '@/app/components/hero/page'
import Navbar from '@/app/components/navbar/page'
import Project from '@/app/components/projects/page'
import Technologies from '@/app/components/technologies/page'
import React from 'react'

const Homepage = () => {
    return (
        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
      </div>
      <div className='container mx-auto px-8'>
        <Navbar/>
        <Hero/>
        <Technologies />
        <Experience />
        <Project />
        <Contact />
      </div>
        </div>
    )
}

export default Homepage
