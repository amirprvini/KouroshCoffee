import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface HeaderButtonProps {
    title: string
    navigateProp : string
    isClickedProp ?: boolean
    onClickProp : ()=> void 
}

const HeaderButton:React.FC<HeaderButtonProps> = ({title,navigateProp,isClickedProp,onClickProp}):JSX.Element => {

    const navigate = useNavigate()

    const handleClick = (nav:string)=>{
        console.log('title: ' , title) ; 
        console.log('isClickedProp: ' , isClickedProp);
        navigate(nav)
    }

  return <div className={`headerButtonWrapper ${isClickedProp && 'border-b-black border-b-4'} py-2 transition-all duration-75`}>
        <button className='headerButton font-iranyekan text-lg sm:text-xl lg:text-2xl ' onClick={()=>{
            onClickProp()
            handleClick(navigateProp)}}> {title} </button>
  </div>
  
}

export default HeaderButton