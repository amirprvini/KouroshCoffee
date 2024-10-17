import React, { ComponentProps } from 'react'
import { IoIosLogIn } from "react-icons/io";

// interface ILoginButton {
//     onClickProp : ()=> void
// }

export type TVariant = 'primary' | 'secondry' 

type TLoginButton = ComponentProps<"button"> & {
  variant : TVariant
}

const LoginButton = ({children,variant,...rest}:TLoginButton)=> {
  return <button className={`loginButton border-2 rounded-md shaddow-md
  px-2 py-1 font-dana font-semibold min-w-16 ${handleVariant(variant)}`} {...rest}> 
      <div className="iconWrapper h-full flex items-center text-2xl">
          <IoIosLogIn />
      </div>
      
      <div className="contentWrapper ">
        ورود  <span className='font-extrabold text-xl'> | </span>  ثبت نام 
      </div>


  </button>
}


export function handleVariant (variant:TVariant){
    if(variant === 'primary')
      return 'text-black hidden sm:flex gap-1'
    else if(variant === 'secondry') 
    return 'text-white scale-90 flex gap-1 sm:hidden'
}

export default LoginButton 