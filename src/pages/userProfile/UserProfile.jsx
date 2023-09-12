import React from "react";
import Footer from "../../components/footer/Footer";
import CustomNavbar from "./usercustomnavbar/CustomNavbar";
import SideBar from "./sidebar/SideBar";
import MainComponent from "./mainComponent/MainComponent";
import MobileNavbar from "./mobileView/MobileNavbar";
import CustomSearch from "./mobileView/CustomSearch";
import MobileMainComponent from "./mobileView/MobileMainComponent";


const UserProfile = () => {
    return (
    <div className="h-screen flex flex-col"> 
       <div className="h-auto bg-black flex justify-between items-center m-0 w-full">

      <div className="bg-[white] h-full w-[20%] flex lg-max:hidden">
        {/* for the sidebar component */}
        <SideBar />
      </div>

      <div className="flex flex-col h-full w-[80%] lg-max:hidden">
        {/* navbar component */}
      <CustomNavbar/>
      {/* main component */}
      <MainComponent />
      <div>

      </div>
      </div>

      <div className="hidden lg-max:flex lg-max:h-auto lg-max:bg-white lg-max:flex-col lg-max:w-full"> 
      <MobileNavbar />
      <CustomSearch />
      <MobileMainComponent />
      </div>

       </div>

       <div>
        <Footer />
       </div>
    </div>
    )
}

export default UserProfile;