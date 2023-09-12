import React,{useState} from 'react'
import calendarPic from '../../../../assets/calendar.jpg'
import peoplePic from '../../../../assets/people.jpg'
import clockPic from '../../../../assets/clock.jpg'
import userPic from '../../../../assets/user.jpg'
import mymyPic from '../../../../assets/mymy.jpg'
import pypyPic from '../../../../assets/pypy.jpg'




const ReservationUi = () => {

    const [upcomingReservation,setUpcomingReservation] = useState([])
  const [pastReservation,setPastReservation] = useState([{}])

  return (
    <div className='w-full h-auto flex flex-col justify-center items-center'>
   

   <div className='w-full h-auto bg-[#FFFFFF] rounded-lg flex flex-col'>

              <div className='w-full h-auto flex flex-col'>
          
             <div className='h-[50px] w-full flex justify-start items-center mt-5'><p className='pl-5'>Upcoming reservations</p></div>
              <div className={` h-auto w-full flex flex-col justify-center items-center p-4`}>
               
                

                {
               upcomingReservation.length == 0 ? (
                 <div className='w-full h-[400px] flex flex-col justify-center items-center rounded-lg border borrder-[#DADADA] '>
                  <div className='w-full h-[100px] p-2 flex justify-center items-center'><img alt='' className='' src={mymyPic}/></div>
                  <div className='w-full h-[150px] flex justify-center items-center flex-col'>
                    <h2 className='text-[#2B2B2B] text-xl text-center pb-2'>No upcoming reservation</h2>
                    <p className='text-center text-[#717171] text-sm font-[Gordita] p-3'>
                    You have no upcoming reservations. 
                     After you are done enjoying your reservations, they will show up here.
                    </p>
                  </div>
                  <div className='w-full h-[100px] flex justify-center items-center'>
                    <div className='w-[122px] h-[50px] border border-[#DADADA] flex justify-center items-center cursor-pointer rounded-3xl'>
                      <p>Explore</p>
                    </div>
                  </div>
                </div> 
               ) : (
                <>
                 <div className='h-auto w-full  m-1 rounded-lg flex flex-col border border-[#DADADA] p-2'>
                 <div className='w-full flex h-auto '>
                  <div className='w-[50%] bg-blue-gray-600 h-[200px] rounded-lg mb-2'></div>
                  <div className='w-[50%] flex flex-col h-auto'>
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

               
                <div className='h-auto w-full  m-1 rounded-lg flex flex-col border border-[#DADADA] p-2'>
                 
                  <div className='w-full flex h-auto '>
                  <div className='w-[50%] bg-blue-gray-600 h-[200px] rounded-lg mb-2'></div>
                  <div className='w-[50%] flex flex-col h-auto'>
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


              <div className='w-full h-auto flex flex-col '>
              <div className='h-[70px] w-full  flex justify-start items-center'><p className='pl-5'>Past reservations</p></div>
              <div className=' h-auto w-full flex justify-center items-center p-4 flex-col border borrder-[#DADADA] rounded-lg'>
                 
                

                  {
                    pastReservation.length == 0 ? (
                        <div className='w-full h-[400px] flex flex-col justify-center items-center'>
                   <div className='w-1/2 h-[100px] p-2 flex justify-center items-center'><img alt='' className='' src={pypyPic}/></div>
                  <div className='w-full h-[150px] flex justify-center items-center flex-col'>
                    <h2 className='text-[#2B2B2B] text-xl text-center pb-2'>No past revertions</h2>
                    <p className='text-center text-[#717171] text-sm font-[Gordita]'>
                    You have no past reservations. 
                     After you are done enjoying your reservations, they will show up here.
                    </p>
                  </div> 
                </div> 

                    ) : (<>

                        <div className='h-auto w-full  rounded-3xl flex justify-center items-center border border-[#DADADA] m-2 flex-col p-3'>
                          <div className='h-auto w-full flex justify-center items-cente p-2r'>
                          <div className='w-1/2 flex flex-col h-[180px] bg-blue-gray-500 rounded-xl'></div>
                     <div className='w-1/2 flex flex-col h-auto'>
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
                          </div>
                    
                     <div className='w-full  h-[100px] flex justify-center items-center'>
                    <div className='w-[70%] h-[50px] bg-[#BC172F] rounded-lg m-1 flex justify-center items-center cursor-pointer'>
                      <p className='text-[12px] text-center'>Back again</p>
                    </div>
                    <div className='w-[20%] h-[50px] border border-[#DADADA] rounded-lg flex justify-center items-center cursor-pointer'>
                    <p className='text-[12px] text-center'>Rate</p>
                    </div>
                    </div> 
                  </div>


                  <div className='h-auto w-full  rounded-3xl flex justify-center items-center border border-[#DADADA] m-2 flex-col p-3'>
                          <div className='h-auto w-full flex justify-center items-cente p-2r'>
                          <div className='w-1/2 flex flex-col h-[180px] bg-blue-gray-500 rounded-xl'></div>
                     <div className='w-1/2 flex flex-col h-auto'>
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
                          </div>
                    
                     <div className='w-full  h-[100px] flex justify-center items-center'>
                    <div className='w-[70%] h-[50px] bg-[#BC172F] rounded-lg m-1 flex justify-center items-center cursor-pointer'>
                      <p className='text-[12px] text-center'>Back again</p>
                    </div>
                    <div className='w-[20%] h-[50px] border border-[#DADADA] rounded-lg flex justify-center items-center cursor-pointer'>
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
  )
}

export default ReservationUi