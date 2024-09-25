import { ButtonsData } from './ButtonsData'
import HeaderButton from '../../Buttons/HeaderButton'
import { useLocation} from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNavBar from '../../MobileNavBar';

interface HeaderProps {}
const Header: React.FC<HeaderProps> = (): JSX.Element =>{

    const location = useLocation(); 
    const currentPath = location.pathname;

    const handleBurgerButton = ()=>{
        
        const mobileNavBar = document.querySelector('.mobileNav');
        mobileNavBar?.classList.toggle('-top-96')
        mobileNavBar?.classList.toggle('top-0')

    }

  return <div className='headerWrapper w-full flex-col gap-2'>
        
    <div className="laptopNav pr-4 border-b border-neutral-400 lg:px-10 flex justify-between lg:justify-around items-center shaddow-md h-32 bg-white shadow-md sticky top-0">

            <ul className="headerButtonsList w-full hidden lg:flex justify-between px-12">
            {ButtonsData.map((item,index)=>{
                return <li key={index}> <HeaderButton isClickedProp={currentPath === item.navigateTo ? true : false} title={item.title} navigateProp={item.navigateTo} onClickProp={()=>{}} /> </li>
            })}
        </ul>

        <div className="burgurButtonWrapper cursor-pointer lg:hidden text-4xl" onClick={handleBurgerButton}>
            <RxHamburgerMenu />
        </div>

        <div className="logoWrapper">
            <img src="./images/kouroshLogo.png" alt="kouroshLogo" width='400px'/>
        </div>

    </div>

        <div className={`mobileNav transition-all duration-200 w-full fixed -top-96`}>
            <MobileNavBar closeButtonProp={()=>{ handleBurgerButton() }} onComplete={()=>{handleBurgerButton()}} />
        </div>

  </div>
}

export default Header