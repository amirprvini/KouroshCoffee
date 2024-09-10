import React, { useEffect } from 'react'
import { ButtonsData } from './ButtonsData'
import HeaderButton from '../../Buttons/HeaderButton'
import { useLocation} from 'react-router-dom'

interface HeaderProps {}
const Header: React.FC<HeaderProps> = (): JSX.Element =>{

    // const {id} = useParams() ; 
    
    const location = useLocation(); 
    const currentPath = location.pathname;
    
    useEffect(()=>{
        console.log("param: " , currentPath) ;
    },[])

  return <div className='headerWrapper w-full flex justify-around items-center shaddow-md h-40 bg-neutral-100 shadow-md'>
        <ul className="headerButtonsList w-full flex justify-around">
            {ButtonsData.map((item,index)=>{
                return <li key={index}> <HeaderButton isClickedProp={currentPath === item.navigateTo ? true : false} title={item.title} navigateProp={item.navigateTo} /> </li>
            })}
        </ul>
        <div className="logoWrapper">
            <img src="./images/kouroshLogo.png" alt="kouroshLogo" />
        </div>
  </div>
}

export default Header