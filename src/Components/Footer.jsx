import React from 'react'
import { FaTwitter, FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        {/* Blue line */}
        <div className="bg-[rgb(44,127,191)] h-[10px] w-full"></div>

        <div className="flex justify-center">
            <div className='flex flex-col md:flex-row justify-between w-[75%]'>
                {/* Company */}
                <div>
                    <div className='w-full m-2 mb-4 font-bold text-[23px]'>Company</div> 
                    <div className='w-full m-2 hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'>Innovations</div> 
                    <div className='w-full m-2 hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'>Business Services</div>
                    <div className='w-full m-2 hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'>Financial Services</div>
                    <div className='w-full m-2 hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'>Lejhro Recruiter</div>
                    <div className='w-full m-2 hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'>About</div> 
                    <div className='w-full m-2 hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'>Blogs</div> 
                </div>
                   
                {/* Programs */}
                <div>
                    <div className='w-full m-2 mb-4 font-bold text-[23px]'>Programs</div> 
                    <div className='w-full m-2 hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'>Lejhro Bootcamp</div>  
                </div>

                {/* Support */}
                <div>
                    <div className='w-full m-2 mb-4 font-bold text-[23px]'>Company</div> 
                    <div className='w-full m-2 hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'>Contact</div> 
                    <div className='w-full m-2 hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'>Terms of use</div>
                    <div className='w-full m-2 hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'>Privacy Statement</div> 
                </div>

                {/* Connect with us */}
                <div>
                    <div className='w-full m-2 mb-4 font-bold text-[23px]'>Connect with us</div>
                    <div className='flex text-[25px] gap-x-4'>
                        <FaTwitter className='hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'/> 
                        <FaFacebookSquare className='hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'/>
                        <FaLinkedin className='hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'/>
                        <FaYoutube className='hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'/>
                    </div> 
                </div>
            </div>
        </div>

        <div className='flex justify-center m-3 text-[12px] lg:text-[15px]'>© 2023 LEJHRO. All Rights Reserved.</div>
    </>
  )
}

export default Footer