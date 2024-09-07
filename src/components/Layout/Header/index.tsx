import React from 'react'
import { ButtonsData } from './ButtonsData'
import HeaderButton from '../../Buttons/HeaderButton'

interface HeaderProps {}
const Header: React.FC<HeaderProps> = (): JSX.Element =>{
  return <div className='headerWrapper w-full flex justify-around items-center shaddow-md h-40 border-b-2 border-black'>
        <ul className="headerButtonsList w-full flex justify-around">
            {ButtonsData.map((item,index)=>{
                return <li key={index}> <HeaderButton title={item.title} navigateProp={item.navigateTo} /> </li>
            })}
        </ul>
        <div className="logoWrapper">
            <img src="./images/kouroshLogo.png" alt="kouroshLogo" />
        </div>
  </div>
}

export default Header