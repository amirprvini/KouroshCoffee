import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface HeaderButtonProps {
    title: string
    navigateProp : string
    isClickedProp : boolean
}

const HeaderButton:React.FC<HeaderButtonProps> = ({title,navigateProp,isClickedProp}):JSX.Element => {

    const navigate = useNavigate()

    const handleClick = (nav:string)=>{
        console.log('title: ' , title) ; 
        console.log('isClickedProp: ' , isClickedProp);
        navigate(nav)
    }

  return <div className={`headerButtonWrapper ${isClickedProp && 'border-b-black border-b-2'} py-2 transition-all duration-75`}>
        <button className='headerButton font-dana text-xl sm:text-2xl lg:text-3xl ' onClick={()=>{handleClick(navigateProp)}}> {title} </button>
  </div>
  
}

export default HeaderButton