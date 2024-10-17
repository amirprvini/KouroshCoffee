import React, { useEffect } from 'react'
import { getUsers } from '../../../components/services/api'
import ConfirmButton from '../../../components/Buttons/ConfirmButton';
import { useFormik } from 'formik';
import { userType } from '../../../types/user.type';


interface IInquiry {
  onNextStep: (data:userType)=> void 
}
const Inquiry: React.FC<IInquiry> = ({onNextStep}): JSX.Element => {

  const formik = useFormik<userType>({
      
    initialValues:{
    
    createdAt:'',
    email:'' ,
    firstName:'',
    id:0,
    lastName:'',
    phone:'',
    updatedAt:'' ,
    userName:'' ,
    userPic:''
    
  },

    onSubmit: (data:any,{resetForm})=>{
    
      console.log('data: ' , data);
          
    setTimeout(()=>{
        resetForm()
      },2000)

      onNextStep(data);
      
    }
      

  })

  return <div className='InquiryWrapper w-full h-full flex justify-center'> 

        <div className="loginFormWrapper w-4/5 sm:w-3/4 max-w-[27rem] py-10 flex justify-center items-center">
            
            <form onSubmit={formik.handleSubmit} className="loginForm relative w-full min-h-[30rem] rounded-lg border-neutral-200 border-2 shadow-md flex flex-col items-center justify-start gap-4">
                  
                  <div className="loginFormHeader w-full flex flex-col gap-3 py-5">

                        <div className="formLogoWrapper w-full flex justify-center">
                          <img src="./images/kouroshLogo2.png" alt="formLogo" className='w-20' />
                        </div>

                  </div>

                  <div className="main w-full flex flex-col gap-2">
                    
                    <div className="formTitleWrapper w-full flex justify-start px-4 font-semibold text-xl font-iranyekan">
                          <h1 className="formTitle">
                            ورود | ثبت نام
                          </h1>
                    </div>

                    <div className="formDescriptionWrapper w-full flex justify-start font-dana py-2 px-4 text-neutral-600">
                          <p className="formDescription leading-7">
                            سلام! <br/>
                            لطفا شماره موبایل خود را وارد کنید
                          </p>
                    </div>

                        <div className="inputWrapper w-full flex px-4">
                          <input onChange={formik.handleChange} value={formik.values.phone} name='phone' id='phone' type="tell" className='px-3 text-xl text-neutral-600 rounded-lg w-full border-2 border-neutral-300 h-14' />
                        </div>

                  </div>

                        <div className="confirmButtonWrapper w-full px-4 flex justify-center absolute bottom-4">
                            <ConfirmButton />
                        </div>

            </form>
        </div>
  </div>
}

export default Inquiry