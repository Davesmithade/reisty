import React from 'react'
import logo from '../../../assets/reistynewlogo.svg'
import reservatiPics from "../../../assets/resevationpics.jpg"
import profilePics from "../../../assets/profilepics.jpg"
import logoutPics from "../../../assets/logout.jpg"
import headphonePics from "../../../assets/headphone.jpg"
import { NavLink, Link } from "react-router-dom";


const SideBar = () => {


  const list = [
    {
        text: "Reservations",
        image: reservatiPics
    },
    {
        text: "Profile",
        image: profilePics
    },
    {
    text: "Help & Support",
    image: headphonePics
    },
    {
        text: "Log out",
        image: logoutPics
    }
  ]

  return (
    <div className='flex flex-col w-full h-auto'>
        {/* logo div */}
        <div className='w-full h-12 flex justify-start p-3 items-center'>
        <NavLink to="/">
                <img src={logo} alt="" width={80} className="h-full w-full"/>
              </NavLink>
        </div>
        {/* list div */}
        <div className='w-full flex flex-col mt-4 h-[218px]'>

           {/* <div className='w-full h-[70px] flex items-center pl-7'>
            <div className=''>
                
            <img alt='' src={reservatiPics}/>
            </div>
            <div className='w-[80%]'>
                <p className='pl-2'>home</p>
            </div>
           </div> */}

           {
            list.map(({text,image}) => (
                <div className='w-full h-[70px] flex items-center pl-7 cursor-pointer'>
            <div className=''>
                {/* icons would be place hear */}
            <img alt='' src={image}/>
            </div>
            <div className='w-[80%]'>
                <p className='pl-2'>{text}</p>
            </div>
           </div>
            ))
           }
           
        </div>

    </div>
  )
}


export default SideBar;
