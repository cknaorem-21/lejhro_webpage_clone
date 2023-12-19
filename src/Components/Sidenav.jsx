import React from 'react'
import logoBlue from "../assets/lejhro_icon_blue.png"
import { MdOutlineCancel } from "react-icons/md";
import { FaTwitter, FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";

const Sidenav = ({sidenavActive, setSidenavActive}) => {
    function handleCancelBtn() {
        console.log(sidenavActive)
        setSidenavActive(false);
        // console.log(sidenavActive)
    }
  return (
    <>
        {/* Sidenav */}
        <div className={`fixed z-50 top-0 right-0 overflow-clip bg-white w-[230px] sm:w-[290px] md:w-[340px] lg:w-[400px] h-screen`}>
            {/* Top div */}
            <div className='border-b-[1px] border-gray-400 m-2'>
              <div className='flex justify-center'>
                {/* Lejhro Icon */}
                <div className='flex justify-center w-full'>
                  <img className="w-[13] md:w-[15rem] lg:w-[17rem]" src={logoBlue} alt="lejro_icon"></img>
                </div>

                {/* Cancel icon */}
                <div className='flex ml-3 lg:ml-0 items-center w-[6rem]'>
                  <MdOutlineCancel onClick={handleCancelBtn} className='text-[40px] hover:bg-black hover:text-white rounded-full duration-200' />
                </div>
              </div>
            </div>

            {/* Options */}
            <div className='mx-5 my-4'>
              <div className='p-2 text-xl lg:text-2xl font-medium hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'>
                Innovations
              </div>
              <div className='p-2 text-xl lg:text-2xl font-medium hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'>
                Bootcamp
              </div>
              <div className='p-2 text-xl lg:text-2xl font-medium hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'>
                Business Services
              </div>
              <div className='p-2 text-xl lg:text-2xl font-medium hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'>
                Financial Services
              </div>
              <div className='p-2 text-xl lg:text-2xl font-medium hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'>
                About
              </div>
              <div className='p-2 text-xl lg:text-2xl font-medium hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'>
                Contact us
              </div>
              <div className='p-2 text-xl lg:text-2xl font-medium hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'>
                Blogs
              </div>

              {/* Social icons */}
              <div className='p-2 flex gap-x-4 text-[30px]'>
                <FaTwitter className='hover:text-[#2c7fbf] duration-100 hover:cursor-pointer' /> 
                <FaFacebookSquare className='hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'/>
                <FaLinkedin className='hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'/>
                <FaYoutube className='hover:text-[#2c7fbf] duration-100 hover:cursor-pointer'/>
              </div>
            </div>
          </div>
    </>
  )
}

export default Sidenav