import { ButtonsData } from './ButtonsData'
import HeaderButton from '../../Buttons/HeaderButton'
import { useLocation} from 'react-router-dom'

interface HeaderProps {}
const Header: React.FC<HeaderProps> = (): JSX.Element =>{

    const location = useLocation(); 
    const currentPath = location.pathname;

  return <div className='headerWrapper w-full px-14 flex justify-around items-center shaddow-md h-28 bg-white shadow-md sticky top-0'>
        
        <ul className="headerButtonsList w-full flex justify-around">
            {ButtonsData.map((item,index)=>{
                return <li key={index}> <HeaderButton isClickedProp={currentPath === item.navigateTo ? true : false} title={item.title} navigateProp={item.navigateTo} /> </li>
            })}
        </ul>

        <div className="logoWrapper">
            <img src="./images/kouroshLogo.png" alt="kouroshLogo" width={400}/>
        </div>

  </div>
}

export default Header