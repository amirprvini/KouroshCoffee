import { ButtonsData } from './ButtonsData'
import HeaderButton from '../../Buttons/HeaderButton'
import { useLocation, useNavigate} from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNavBar from '../../MobileNavBar';
import LoginButton from '../../Buttons/LoginButton';
import ShoppingCartButton from '../../Buttons/ShoppingCartButton';

interface HeaderProps {}
const Header: React.FC<HeaderProps> = (): JSX.Element =>{

    const location = useLocation(); 
    const currentPath = location.pathname;


    const navigate = useNavigate();

    const loginNavigate = useNavigate();

    const handleBurgerButton = ()=>{
        
        const mobileNavBar = document.querySelector('.mobileNav');
        mobileNavBar?.classList.toggle('-top-96')
        mobileNavBar?.classList.toggle('top-0')

    }

    const handleHeaderLogoClick = ()=>{
        navigate('/') ;
    }


    const handleLoginButton = ()=>{
        loginNavigate('/login')
    }

  return <div className='headerWrapper w-full flex-col gap-2 sticky top-0 z-10'>
        
    <div className="laptopNav pr-4 border-b border-neutral-400 lg:px-4 flex justify-between lg:justify-around items-center shaddow-md h-32 bg-white shadow-md sticky top-0">

        <ul className="headerButtonsList hidden w-2/5 lg:flex justify-between px-12">
            {ButtonsData.map((item,index)=>{
                return <li key={index}> <HeaderButton isClickedProp={currentPath === item.navigateTo ? true : false} title={item.title} navigateProp={item.navigateTo} onClickProp={()=>{}} /> </li>
            })}
        </ul>

        <div className="burgurButtonWrapper cursor-pointer lg:hidden w-2/5 flex justify-start text-4xl" onClick={handleBurgerButton}>
            <RxHamburgerMenu />
        </div>

        <div className="logoWrapper w-1/5 h-full flex justify-center items-center cursor-pointer" onClick={handleHeaderLogoClick}>
            <img src="./images/kouroshLogo2.png" alt="kouroshLogo" width='100px'/>
        </div>

        <div className="userButtonsWrapeer w-2/5 flex gap-10 justify-end px-10">
            <LoginButton onClickProp={handleLoginButton} />
            <ShoppingCartButton />
        </div>

    </div>

        <div className={`mobileNav transition-all duration-200 w-full fixed -top-96`}>
            <MobileNavBar closeButtonProp={()=>{ handleBurgerButton() }} onComplete={()=>{handleBurgerButton()}} />
        </div>

  </div>
}

export default Header