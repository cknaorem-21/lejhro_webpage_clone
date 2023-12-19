import React, { useEffect, useState } from "react";
import logo from "../assets/lejhro_icon.png";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";

const Navbar = () => {
  const [sidenavActive, setSidenavActive] = useState(false);
  const [topnavActive, setTopnavActive] = useState(false);

  // show topNav on scroll
  window.addEventListener('scroll', ()=>{
    if(scrollY > 70)
      setTopnavActive(true);
    else
    setTopnavActive(false);
  })

  return (
    <>
      <div className="relative">
        {sidenavActive ? (
          <Sidenav
            sidenavActive={sidenavActive}
            setSidenavActive={setSidenavActive}
          />
        ) : (
          ""
        )}

        {topnavActive ? (
          <Topnav
            topnavActive={topnavActive}
            setTopnavActive={setTopnavActive}
            sidenavActive={sidenavActive}
            setSidenavActive={setSidenavActive}
        />
        ) : (
          ""
        )}
        
        {/* Navbar div */}
        <div className="flex justify-center items-center bg-[#d6932c] text-white h-[12vh] md:h-[16vh] lg:h-[20vh]">
          <div className="flex w-[90%] md:w-[85%] lg:w-[75%]">
            <div className="flex justify-between w-full h-fit">
              <div>
                <img
                  className="w-[170px] md:w-[200px] lg:w-[230px]"
                  src={logo}
                  alt="lejro_icon"
                ></img>
              </div>
              <nav className="hidden xl:flex items-center">
                <div className="flex justify-between xl:gap-x-10">
                  <Link className="hover:text-gray-200">Innovations</Link>
                  <Link className="hover:text-gray-200">Business Services</Link>
                  <Link className="hover:text-gray-200">
                    Financial Services
                  </Link>
                  <Link className="hover:text-gray-200">Bootcamp</Link>
                </div>
              </nav>

              <Hamburger
                color='white'
                sidenavActive={sidenavActive}
                setSidenavActive={setSidenavActive}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
