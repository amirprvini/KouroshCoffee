import React from 'react'
import { useNavigate } from 'react-router-dom'

interface HeaderButtonProps {
    title: string
    navigateProp : string
}

const HeaderButton:React.FC<HeaderButtonProps> = ({title,navigateProp}):JSX.Element => {

    const navigate = useNavigate()

    const handleClick = (nav:string)=>{
        navigate(nav)
    }

  return <div className='headerButtonWrapper'>
        <button className='headerButton font-iranyekan text-xl sm:text-2xl lg:text-3xl ' onClick={()=>{handleClick(navigateProp)}}> {title} </button>
  </div>
  
}

export default HeaderButton