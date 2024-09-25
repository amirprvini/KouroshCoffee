import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

interface EventCardProps {
    eventTitleProp?: string ,
    eventAvatarUrl ?: string ,
    presentByProp?: string , 
    eventDateProp?: string ,
    eventTimeProp?: string ,
    eventLocProp?: string 
}

const EventCard: React.FC<EventCardProps> = 
({eventAvatarUrl='./images/Kourosh-RoofGarden-2.jpg',eventTitleProp='-------',eventDateProp='-------',eventLocProp='-------',eventTimeProp='-------',presentByProp='-------'}): JSX.Element => {
  return <div className='eventCardWrapper bg-white border border-neutral-200 rounded-md shadow-lg flex flex-col gap-1'>
        
        <div className="eventCardImgWrapper px-2 py-3">
            <img src={eventAvatarUrl} alt="eventPhoto" width={'400px'} />
        </div>

        <div className="eventCardTitleWrapper px-2 py-3 w-full flex justify-center font-iranyekan">
            <h1 className="eventCardTitle text-2xl">
            {eventTitleProp}
            </h1>
        </div>

        <div className="presentByWrapeer px-2 flex items-center gap-2">
            <div className="iconWrapper text-lg">
                <FaRegUserCircle />
            </div>
            <p className="peresentBy font-dana">{presentByProp} </p>
        </div>

        <div className="dateWrapeer px-2 flex items-center gap-2">
            <div className="iconWrapper text-lg">
                <MdOutlineDateRange />
            </div>
            <p className="date font-dana">{eventDateProp}</p>
        </div>

        <div className="timeWrapeer px-2 flex items-center gap-2">
            <div className="iconWrapper text-lg">
                <FaRegClock />
            </div>
            <p className="time font-dana">{eventTimeProp}</p>
        </div>

        <div className="locationWrapeer px-2 flex items-center gap-2">
            <div className="iconWrapper text-lg">
                <FaLocationDot />
            </div>
            <p className="location font-dana ">{eventLocProp}</p>
        </div>


        <div className="eventButtonWrapperw-full flex justify-center px-2">
            <button className="eventButton w-full rounded-md py-1 flex justify-center items-center font-dana my-2 bg-blue-500 text-white ">
                رزرو ایونت
            </button>
        </div>

        


  </div>
}

export default EventCard