import React from 'react'
import mailImg from '../Assest/OBJECTS.png'

const BodyBox4 = () => {
  return (
    <div className=' md:bg-[#EDF2FE]  h-full  '>

<div className=' mx-10  md:mx-72 flex flex-col md:flex-row items-center justify-start'>
        <div className=' md:w-6/12'>
            <h2 className=' hidden md:block text-[#407AFF] font-semibold  text-sm md:text-md mt-10 '>NEWSLETTER</h2>
            <h1 className='text-[#14316C]  md:text-5xl font-semibold mt-10 '>Security First News Letter by QuillAudits</h1>

            <hr className='  md:hidden border-[#2D83EE] border-b-2 w-4/12 mx-auto mt-2' ></hr>

            <p className=' hidden md:block  text-[#2D3648] mt-8  mr-40'>
            Subscribe for the most Exclusive Weekly security based newsletter and covering all the  recent hacks up to date.
            </p>
        </div>
       

       <div className=' mt-10 '>
        <img src={mailImg} alt='dd' className=' w-72 md:w-full' />
        <div className="relative mt-2 md:bg-white rounded-lg flex flex-col  mb-4">
  <input 
    type="text"
    placeholder="vitalik@ethereum.org"
    className="md:w-[500px] h-[20px] md:h-[40px] mt-1 px-2 md:p-6 rounded-lg border-none focus:outline-none bg-white p-4 "
  />
  <button className= "  md:absolute top-0 right-0 rounded-md  p-2 bg-gradient-to-r from-[#4F37EE] via-[#3F7AF0] to-[#7184FD] font-semibold text-white px-8 mt-4 md:mt-2 w-6/12  md:w-fit mx-auto">
    Subscribe
  </button>
</div>

        </div>
    </div>
    </div>
  )
}

export default BodyBox4