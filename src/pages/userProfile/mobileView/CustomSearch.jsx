import React from 'react'
import { BiSearch } from "react-icons/bi";
import { NavLink, Link } from "react-router-dom";
import {HiOutlineUserCircle} from "react-icons/hi"

const CustomSearch = () => {
  return (
    <div className='w-full h-[80px] flex justify-center items-center p-3'>
    <div className="search-box w-full">
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
  )
}

export default CustomSearch