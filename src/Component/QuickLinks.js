import React from 'react'

const QuickLinks = () => {
  return (
    <div> <div>
    <div className=" w-fit ">
   <h1 className=" font-semibold mt-8 text-xl ">Quick Links</h1>

   <hr className=" border-b-2 border-[#2D83EE] mt-1"></hr>
 </div>


 <div className=' flex flex-col items-start space-y-2 mt-4'>
   <h1> Pricing</h1>
   <h1>Audit Process</h1>
   <h1>Our Audits</h1>
   <h1>Testimonials </h1>
   <h1> Security Synopsis</h1>
   <h1>Blog </h1>
   <h1>Clients</h1>
   <div className=' flex flex-row items-center justify-center'>
    <h1> Careers</h1>
    <span className=' bg-[#2D83EE]  mx-1 px-1 rounded-lg'>
        Hiring
    </span>
   </div>
 </div>
</div></div>
  )
}

export default QuickLinks