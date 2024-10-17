import React from 'react'
import { ButtonsData } from '../Layout/Header/ButtonsData'
import HeaderButton from '../Buttons/HeaderButton'
import { IoCloseSharp } from "react-icons/io5";
import LoginButton from '../Buttons/LoginButton';

interface MobileNavBarProps {
    closeButtonProp : ()=> void
    onComplete : ()=> void 
    loginButtonFunc : ()=> void 
}

const MobileNavBar: React.FC<MobileNavBarProps> = ({closeButtonProp,onComplete,loginButtonFunc}): JSX.Element => {
  
  return <div className={`mobileNavBarWrapper bg-black bg-opacity-95 text-white w-full flex flex-col gap-2 h-min `}>
        
        <div className="mobileNavHeader w-full flex justify-between py-3">
            
            <div className="loginButtonContainer flex items-center px-5">
                <LoginButton variant='secondry' onClick={loginButtonFunc} />
            </div>

            <div className="closeIconWrapper flex items-center justify-end px-8 text-2xl" onClick={closeButtonProp}>
                <IoCloseSharp />
            </div>

        </div>

        <ul className="headerButtonsList w-full flex flex-col items-center justify-start py-3 ">
            {ButtonsData.map((item,index)=>{
                return <li key={index}> <HeaderButton title={item.title} navigateProp={item.navigateTo} onClickProp={()=>{onComplete()}} /> </li>
            })}
        </ul>
        
  </div>
}

export default MobileNavBar