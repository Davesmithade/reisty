import React from 'react'
import logo from '../../../assets/reistynewlogo.svg'
import { NavLink, Link } from "react-router-dom";
import {HiOutlineUserCircle} from "react-icons/hi";

const MobileNavbar = () => {
  return (
    <div className='h-[80px] w-full flex justify-center items-center'>
        <div className='h-full w-1/2 flex justify-start items-center'>
            <img alt='' src={logo} className='p-4'/>
        </div>
        

        <div className='w-1/2 flex justify-end items-center h-[80px] p-4'>
              <div className="flex h-[70px] w-1/2 items-center justify-end p-3  ml-3">
              <div className="bg-white flex justify-center items-center h-[50px] w-[50px] rounded-full"> 
              <NavLink to="/userProfile">
                    <HiOutlineUserCircle size={"4rem"} color="#DADADA"/>
              </NavLink>
              </div>
            </div>
              </div>
              
    </div>
  )
}

export default MobileNavbar