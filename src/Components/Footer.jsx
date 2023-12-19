import React from 'react'

const Footer = () => {
  return (
    <>
        {/* Blue line */}
        <div className="bg-[rgb(44,127,191)] h-[10px] w-full"></div>

        <div className="flex justify-center">
            <div className='flex justify-between w-[75%]'>
                {/* Company */}
                <div>
                    <div className='w-full m-2 mb-4 font-bold text-[23px]'>Company</div> 
                    <div className='w-full m-2'>Innovations</div> 
                    <div className='w-full m-2'>Business Services</div>
                    <div className='w-full m-2'>Financial Services</div>
                    <div className='w-full m-2'>Lejhro Recruiter</div>
                    <div className='w-full m-2'>About</div> 
                    <div className='w-full m-2'>Blogs</div> 
                </div>
                   
                {/* Programs */}
                <div>
                    <div className='w-full m-2 mb-4 font-bold text-[23px]'>Programs</div> 
                    <div className='w-full m-2'>Lejhro Bootcamp</div>  
                </div>

                {/* Support */}
                <div>
                    <div className='w-full m-2 mb-4 font-bold text-[23px]'>Company</div> 
                    <div className='w-full m-2'>Contact</div> 
                    <div className='w-full m-2'>Terms of use</div>
                    <div className='w-full m-2'>Privacy Statement</div> 
                </div>

                {/* Connect with us */}
                <div>
                    <div className='w-full m-2 mb-4 font-bold text-[23px]'>Connect with us</div> 
                    <div className='w-full m-2'>Twitter</div> 
                    <div className='w-full m-2'>Facebook</div>
                    <div className='w-full m-2'>LinkedIn</div>
                    <div className='w-full m-2'>Youtube</div> 
                </div>
            </div>
        </div>

        <div className='flex justify-center m-3'>© 2023 LEJHRO. All Rights Reserved.</div>
    </>
  )
}

export default Footer