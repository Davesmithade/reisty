import React,{useState} from 'react'
import reservationPic from '../../../assets/resevationpics.jpg'
import bellPic from '../../../assets/bell.jpg'
import heartPic from '../../../assets/heart.jpg'
import starPic from '../../../assets/star.jpg'
import cancelPic from '../../../assets/cancel.jpg'
import mymyPic from '../../../assets/mymy.jpg'
import pypyPic from '../../../assets/pypy.jpg'
import calendarPic from '../../../assets/calendar.jpg'
import peoplePic from '../../../assets/people.jpg'
import clockPic from '../../../assets/clock.jpg'
import userPic from '../../../assets/user.jpg'


function MainComponent() {
  const [upcomingReservation,setUpcomingReservation] = useState([])
  const [pastReservation,setPastReservation] = useState([])
  const arrPics = [
    {
      text: 'Reservations',
      image: reservationPic
    },
    {
      text: 'Saved',
      image: starPic
    },
    {
      text: 'Favorites',
      image: heartPic
    },
    { 
      text: 'Notify',
      image: bellPic
    },
    {
      text: 'Cancelled',
      image:cancelPic
    }
  ]


  return (
    <div className='w-full bg-[#F5F5F5] h-full'>
        <div className='h-20 w-full flex justify-start items-end '>
       <h2 className='text-2xl pl-[20px] text-[#2B2B2B]'>Reservations</h2>
        </div>
        
        <div className='h-auto w-full flex justify-center items-center p-3'>

            <div className='h-[900px] w-[20%] m-2'>
            <div className='bg-[#FFFFFF] h-[350px] border-2 borrder-[#DADADA] rounded-lg'>

              {
                arrPics.map(({text,image}) => (
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


            <div className='w-[80%] h-auto bg-[#FFFFFF] border borrder-[#DADADA] rounded-lg flex flex-col'>

              <div className='w-full h-auto flex flex-col border borrder-[#DADADA]'>
          
             <div className='h-[70px] w-full bg-[#F5F5F5] flex justify-start items-center'><p className='pl-5'>Upcoming reservations</p></div>
              <div className={` h-auto w-full flex justify-center items-center p-4`}>
               
                

                {
               upcomingReservation.length == 0 ? (
                 <div className='w-[469px] h-[300px] bg-white flex flex-col mt-10'>
                  <div className='w-full h-[100px] p-2 flex justify-center items-center'><img alt='' className='' src={mymyPic}/></div>
                  <div className='w-full h-[150px] flex justify-center items-center flex-col'>
                    <h2 className='text-[#2B2B2B] text-xl text-center pb-2'>No upcoming reservation</h2>
                    <p className='text-center text-[#717171] text-sm font-[Gordita]'>
                    You have no upcoming reservations. 
                     After you are done enjoying your reservations, they will show up here.
                    </p>
                  </div>
                  <div className='w-full h-[100px] flex justify-center items-center'>
                    <div className='w-[122px] h-[50px] border border-[#DADADA] rounded-lg flex justify-center items-center cursor-pointer'>
                      <p>Explore</p>
                    </div>
                  </div>
                </div> 
               ) : (
                <>
                 <div className='h-auto w-[50%]  m-1 rounded-lg flex flex-col border border-[#DADADA] p-2'>
                  <div className='w-full bg-blue-gray-600 h-[150px] rounded-lg mb-2'></div>
                  <div className='w-full flex flex-col h-auto'>
                  <div className='flex h-[50] w-full m-1'>
                      <p>Orchid Bistro</p>
                    </div>
                    <div className='flex h-[50] w-full m-1'>
                      <img alt='' src={calendarPic}/>
                      <p>Thursday April 2023</p>
                    </div>
                    <div className='flex h-[50] w-full m-1'>
                      <img alt='' src={peoplePic} />
                      <p>3 guest</p>
                    </div>
                    <div className='flex h-[50] w-full m-1'>
                      <img alt='' src={clockPic} />
                      <p>6:00 pm</p>
                    </div>
                    <div className='flex h-[50] w-full m-1'>
                      <img alt='' src={userPic} />
                      <p>Micheal Nelson</p>
                    </div>
                  </div>
                  <div className='w-full  h-[100px] flex justify-center items-center '>
                    <div className='w-[175px] h-[60px] bg-[#BC172F] rounded-lg m-1 flex justify-center items-center cursor-pointer'>
                      <p className='text-[12px] text-center'>Manage reservations</p>
                    </div>
                    <div className='w-[170px] h-[60px] border border-[#DADADA] rounded-lg flex justify-center items-center cursor-pointer'>
                    <p className='text-[12px] text-center'>Cancel</p>
                    </div>
                    </div> 
                </div> 

               
                <div className='h-auto w-[50%]  m-1 rounded-lg flex flex-col border border-[#DADADA] p-2'>
                  <div className='w-full bg-blue-gray-600 h-[150px] rounded-lg mb-2'></div>
                  <div className='w-full flex flex-col h-auto'>
                  <div className='flex h-[50] w-full m-1'>
                      <p>Orchid Bistro</p>
                    </div>
                    <div className='flex h-[50] w-full m-1'>
                      <img alt='' src={calendarPic}/>
                      <p>Thursday April 2023</p>
                    </div>
                    <div className='flex h-[50] w-full m-1'>
                      <img alt='' src={peoplePic} />
                      <p>3 guest</p>
                    </div>
                    <div className='flex h-[50] w-full m-1'>
                      <img alt='' src={clockPic} />
                      <p>6:00 pm</p>
                    </div>
                    <div className='flex h-[50] w-full m-1'>
                      <img alt='' src={userPic} />
                      <p>Micheal Nelson</p>
                    </div>
                  </div>
                  <div className='w-full  h-[100px] flex justify-center items-center '>
                    <div className='w-[175px] h-[60px] bg-[#BC172F] rounded-lg m-1 flex justify-center items-center cursor-pointer'>
                      <p className='text-[12px] text-center'>Manage reservations</p>
                    </div>
                    <div className='w-[170px] h-[60px] border border-[#DADADA] rounded-lg flex justify-center items-center cursor-pointer'>
                    <p className='text-[12px] text-center'>Cancel</p>
                    </div>
                    </div> 
                </div> 
                </>
               )
                }
               

              </div>
       
              </div>


              <div className='w-full h-auto flex flex-col border borrder-[#DADADA] mt-11'>
              <div className='h-[70px] w-full bg-[#F5F5F5] flex justify-start items-center'><p className='pl-5'>Past reservations</p></div>
              <div className=' h-auto w-full flex justify-center items-center p-4 flex-col'>
                 
                

                  {
                    pastReservation.length == 0 ? (
                        <div className='w-[469px] h-[300px] bg-white flex flex-col mt-10'>
                   <div className='w-full h-[100px] p-2 flex justify-center items-center'><img alt='' className='' src={pypyPic}/></div>
                  <div className='w-full h-[150px] flex justify-center items-center flex-col'>
                    <h2 className='text-[#2B2B2B] text-xl text-center pb-2'>No past revertions</h2>
                    <p className='text-center text-[#717171] text-sm font-[Gordita]'>
                    You have no past reservations. 
                     After you are done enjoying your reservations, they will show up here.
                    </p>
                  </div> 
                </div> 

                    ) : (<>
                        <div className='h-[207px] w-full  rounded-3xl flex justify-center items-center border border-[#DADADA] m-2'>
                    <div className='w-[30%] flex flex-col h-[180px] bg-blue-gray-500 rounded-xl'></div>
                     <div className='w-[30%] flex flex-col h-auto'>
                  <div className='flex h-[50] w-full m-1'>
                      <p>Orchid Bistro</p>
                    </div>
                    <div className='flex h-[50] w-full m-1'>
                      <img alt='' src={calendarPic}/>
                      <p>Thursday April 2023</p>
                    </div>
                    <div className='flex h-[50] w-full m-1'>
                      <img alt='' src={peoplePic} />
                      <p>3 guest</p>
                    </div>
                    <div className='flex h-[50] w-full m-1'>
                      <img alt='' src={clockPic} />
                      <p>6:00 pm</p>
                    </div>
                    <div className='flex h-[50] w-full m-1'>
                      <img alt='' src={userPic} />
                      <p>Micheal Nelson</p>
                    </div>
                  </div>
                     <div className='w-[35%]  h-[80%] flex justify-center items-end flex-row-reverse'>
                    <div className='w-[175px] h-[60px] bg-[#BC172F] rounded-lg m-1 flex justify-center items-center cursor-pointer'>
                      <p className='text-[12px] text-center'>Back again</p>
                    </div>
                    <div className='w-[170px] h-[60px] border border-[#DADADA] rounded-lg flex justify-center items-center cursor-pointer'>
                    <p className='text-[12px] text-center'>Rate</p>
                    </div>
                    </div> 
                  </div>


                  <div className='h-[207px] w-full  rounded-3xl flex justify-center items-center border border-[#DADADA] m-2'>
                    <div className='w-[30%] flex flex-col h-[180px] bg-blue-gray-500 rounded-xl'></div>
                     <div className='w-[30%] flex flex-col h-auto'>
                  <div className='flex h-[50] w-full m-1'>
                      <p>Orchid Bistro</p>
                    </div>
                    <div className='flex h-[50] w-full m-1'>
                      <img alt='' src={calendarPic}/>
                      <p>Thursday April 2023</p>
                    </div>
                    <div className='flex h-[50] w-full m-1'>
                      <img alt='' src={peoplePic} />
                      <p>3 guest</p>
                    </div>
                    <div className='flex h-[50] w-full m-1'>
                      <img alt='' src={clockPic} />
                      <p>6:00 pm</p>
                    </div>
                    <div className='flex h-[50] w-full m-1'>
                      <img alt='' src={userPic} />
                      <p>Micheal Nelson</p>
                    </div>
                  </div>
                     <div className='w-[35%]  h-[80%] flex justify-center items-end flex-row-reverse'>
                    <div className='w-[175px] h-[60px] bg-[#BC172F] rounded-lg m-1 flex justify-center items-center cursor-pointer'>
                      <p className='text-[12px] text-center'>Back again</p>
                    </div>
                    <div className='w-[170px] h-[60px] border border-[#DADADA] rounded-lg flex justify-center items-center cursor-pointer'>
                    <p className='text-[12px] text-center'>Rate</p>
                    </div>
                    </div> 
                  </div>

                      </>)
                  }




              </div>
              </div>

             
                
            </div>

          </div>
    </div>
  )
}

export default MainComponent