import React from 'react'

interface FooterProps {}
const Footer: React.FC<FooterProps> = (): JSX.Element => {
  return <div className='bg-black text-white w-full px-2 py-1 h-min flex flex-col gap-3 justify-center items-center'>

    <div className="logoWrapper w-full flex justify-center">
      <img src="./images/kouroshLogo2.png" alt="footerLogo" width='150px' />
    </div>
    <div className="madeByWrapper">
        <h2 className="madeBy font-dana text-lg sm:text-xl lg:text-2xl">طراحی و اجرا توسط امیر پروینی</h2>
    </div>

  </div>
}

export default Footer