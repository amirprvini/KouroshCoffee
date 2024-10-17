import React, { useEffect, useState } from 'react'
import Inquiry from './Inquiry'
import Verify from './Verify'
import { getUsers } from '../../components/services/api'
import { userType } from '../../types/user.type'

  enum loginPageSteps {
      InquiryStep = 0 ,
      VerifyStep = 1 
  }

  interface ILoginPage {}

export const LoginPage: React.FC<ILoginPage> = (): JSX.Element => {

  
  const [steps,setSteps] = useState<loginPageSteps>(loginPageSteps.InquiryStep);
  const [user,setUser] = useState<userType>({
    
    createdAt:'',
    email:'' ,
    firstName:'',
    id:0,
    lastName:'',
    phone:'',
    updatedAt:'' ,
    userName:'' ,
    userPic:''
    
  })
  
  useEffect(()=>{
    getUsers().then((res)=>{console.log('res: ' , res)});
  },[])
  
  const handleAuth = ()=>{
  }


  return <div className='loginPage w-full h-full'>
    
    {(()=>{
   
    switch (steps) {
      
      case loginPageSteps.InquiryStep:
        return <Inquiry  onNextStep={(data:userType)=>{
          console.log('data in onComplete: ');
          setUser(data)
          setSteps(loginPageSteps.VerifyStep)
        }}/>
      
        case loginPageSteps.VerifyStep:
        return <Verify userData={user} onComplete={()=>{
          console.log('on Complete')
        }}/>

      default:
        return null
    }
  })()}

  </div>

}
