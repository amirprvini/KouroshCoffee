import React from 'react'


const LoginPage: React.FC = (): JSX.Element => {
  return <div className='loginPageWrapper w-full flex'> 

        <div className="loginFormWrapper w-2/5 flex justify-center items-center">
            <div className="loginForm w-3/4 h-4/5 rounded-lg border-neutral-100 border-2 shaddow-3xl">

            </div>
        </div>
        
        <div className="imageWrapper w-3/5 relative">
            <img src="./images/CY3A7576.jpg" alt="kouroshPhoto" className='w-full rounded-r-full' />
        </div>

  </div>
}

export default LoginPage