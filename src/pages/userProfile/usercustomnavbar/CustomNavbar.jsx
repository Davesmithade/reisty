import React from 'react'
import { BiSearch } from "react-icons/bi";
import { NavLink, Link } from "react-router-dom";
import {HiOutlineUserCircle} from "react-icons/hi";



const CustomNavbar = () => {
  return (
    <div className='w-full h-[85px] bg-white flex justify-center items-center'>

      <div className='w-1/2 h-[80px] flex justify-start items-center p-3'>
              <div className="search-box">
                <BiSearch size="20" color="gray" />
                <input
                  className="text-[13px]"
                  type="text"
                  placeholder="Search Restaurants, cuisines or experience"
                />

                <div className="dropBox">
                  <div className="title">
                    <Link to="/restaurantsinLocation">
                      All Restaurants in Lagos
                    </Link>
                  </div>
                  <div className="top">Top Searches</div>
                  <div className="allSearches">
                    <div className="search">Bar</div>
                    <div className="search">BBQ</div>
                    <div className="search">Chicken</div>
                    <div className="search">Coctails Bar</div>
                    <div className="search">Burgers</div>
                    <div className="search">Dessert</div>
                    <div className="search">Pizza</div>
                    <div className="search">Patio</div>
                    <div className="search">Salad</div>
                    <div className="search">Swallow</div>
                    <div className="search">Wine</div>
                  </div>
                </div>
              </div>
      </div>

              <div className='w-1/2 flex justify-end items-center h-[80px]'>
              <div className="flex h-[70px] w-1/2 items-center justify-end p-3  ml-3">
            <div className="h-[50px] w-[145px] bg-[#BC172F] flex items-center justify-center rounded-lg m-3 text-white">
             <p>Micheal Nelson</p>
            </div>
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

export default CustomNavbar;