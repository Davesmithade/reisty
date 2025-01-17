import React from "react";
import Cardprops from "../cardFavourite/Cardprops";
import Imgbrown from "../../assets/imgbrown.svg";
import Imgbrown2 from "../../assets/imgbrown2.svg";
import Imgblue from "../../assets/imgblue.svg";
import Imgreen from "../../assets/imggreenchairs.svg";
import Arrow from "../../assets/seemorearrow.svg";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const RestaurantsinLocation = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="px-5 lg:px-16  mt-16 ">
        <div className="lg:pb-6 lg:flex lg:items-center lg:pr-6">
          <div className="lg:flex-1">
            <h1 className="text-[20px] lg:text-[24px] font-medium">
              All Restaurants in Lagos
            </h1>
            <p className="pb-4 text-[14px] lg:text-[16px] font-normal text-[#2B2B2B]">
              Discover the best restaurants in your local area
            </p>
          </div>

          {/* <Link to="/">
            <div className="flex gap-2 items-center">
              <h1 className="text-[#BC172F] font-medium text-[20px]">
                See more
              </h1>
              <img src={Arrow} alt="" srcset="" className=" pt-[6px]" />
            </div>
          </Link> */}
        </div>

        <div className="">
        <div className="flex flex-row overflow-x-scroll lg:grid lg:grid-cols-4 lg:overflow-hidden h-[50vh] lg:h-[70vh] gap-1">
        <Cardprops
          id="1" 
          image={Imgbrown}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        <Cardprops
          id="2" 
          image={Imgblue}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        <Cardprops
          id="3" 
          image={Imgreen}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        <Cardprops
          id="4" 
          image={Imgbrown2}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        </div>

        <div className="flex flex-row overflow-x-scroll lg:grid lg:grid-cols-4 lg:overflow-hidden h-[50vh] lg:h-[70vh] gap-1">
        <Cardprops
          id="1" 
          image={Imgbrown}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        <Cardprops
          id="2" 
          image={Imgblue}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        <Cardprops
          id="3" 
          image={Imgreen}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        <Cardprops
          id="4" 
          image={Imgbrown2}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        </div>

        <div className="flex flex-row overflow-x-scroll lg:grid lg:grid-cols-4 lg:overflow-hidden h-[50vh] lg:h-[70vh] gap-1">
        <Cardprops
          id="1" 
          image={Imgbrown}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        <Cardprops
          id="2" 
          image={Imgblue}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        <Cardprops
          id="3" 
          image={Imgreen}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        <Cardprops
          id="4" 
          image={Imgbrown2}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        </div>

        <div className="flex flex-row overflow-x-scroll lg:grid lg:grid-cols-4 lg:overflow-hidden h-[50vh] lg:h-[70vh] gap-1">
        <Cardprops
          id="1" 
          image={Imgbrown}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        <Cardprops
          id="2" 
          image={Imgblue}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        <Cardprops
          id="3" 
          image={Imgreen}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        <Cardprops
          id="4" 
          image={Imgbrown2}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        </div>

        <div className="flex flex-row overflow-x-scroll lg:grid lg:grid-cols-4 lg:overflow-hidden h-[50vh] lg:h-[70vh] gap-1">
        <Cardprops
          id="1" 
          image={Imgbrown}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        <Cardprops
          id="2" 
          image={Imgblue}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        <Cardprops
          id="3" 
          image={Imgreen}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        <Cardprops
          id="4" 
          image={Imgbrown2}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        </div>
        </div>
      </div>


      <div>
        <Footer />
      </div>
    </>
  );
};

export default RestaurantsinLocation;
