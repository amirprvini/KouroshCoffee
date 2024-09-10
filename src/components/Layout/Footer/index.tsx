import React from 'react'

interface FooterProps {}
const Footer: React.FC<FooterProps> = (): JSX.Element => {
  return <div className='bg-black text-white w-full px-2 py-1 h-28 fixed bottom-0 flex justify-center items-center'>

    <div className="madeByWrapper">
        <h2 className="madeBy font-dana text-xl sm:text-2xl lg:text-3xl">طراحی و اجرا توسط امیر پروینی</h2>
    </div>

  </div>
}

export default Footer