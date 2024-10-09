import React from 'react'
import { IoIosLogIn } from "react-icons/io";

interface ILoginButton {
    onClickProp : ()=> void
}

const LoginButton: React.FC<ILoginButton> = ({onClickProp}): JSX.Element => {
  return <div className='loginButtonWrapper cursor-pointer flex gap-3 rounded-md px-4 py-1 border-2 border-neutral-300 shadow-md font-dana text-black font-semibold' onClick={onClickProp}>
    <div className="loginIconWrapper h-full flex items-center text-black text-xl font-extrabold"> <IoIosLogIn /> </div>
    <button> ورود  <span className='font-extrabold text-black text-xl'> | </span>  ثبت نام </button>
  </div>
}

export default LoginButton