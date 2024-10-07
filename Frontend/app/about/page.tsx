"use client"

import React from 'react'

const About = () =>
{
    return (

        <div className='px-20 bg-sky-500 w-full h-96 flex max-auto'>
            <div className='basis-[55%]'>
                <h1 className='text-4xl  text-white font-extrabold pt-10 '>About Us</h1>
                <p className='text-white text-sm pt-10'><span className='font-bold'>SelWel</span> is a global multi-asset fintech group operating proprietary technology-based trading platforms</p>
            </div>
            <div className='basis-[45%]'>
                <img className='w-96 h-[400px] pl-32' src={"/about/Aboutus.png"} />
            </div>

        </div>


    )
}

export default About