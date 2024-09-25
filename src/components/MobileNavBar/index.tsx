import React from 'react'
import { ButtonsData } from '../Layout/Header/ButtonsData'
import HeaderButton from '../Buttons/HeaderButton'
import { IoCloseSharp } from "react-icons/io5";

interface MobileNavBarProps {
    closeButtonProp : ()=> void
    onComplete : ()=> void 
}

const MobileNavBar: React.FC<MobileNavBarProps> = ({closeButtonProp,onComplete}): JSX.Element => {
  return <div className={`mobileNavBarWrapper bg-black bg-opacity-95 text-white w-full flex flex-col gap-2 h-min `}>
        
        <div className="closeIconWrapper w-full flex justify-end px-8 py-3 text-2xl" onClick={closeButtonProp}>
            <IoCloseSharp />
        </div>

        <ul className="headerButtonsList w-full flex flex-col items-center justify-start py-3 ">
            {ButtonsData.map((item,index)=>{
                return <li key={index}> <HeaderButton title={item.title} navigateProp={item.navigateTo} onClickProp={()=>{onComplete()}} /> </li>
            })}
        </ul>
        
  </div>
}

export default MobileNavBar