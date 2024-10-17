import React from 'react'
import ConfirmButton from '../../../components/Buttons/ConfirmButton'
import { useFormik } from 'formik'
import { userType } from '../../../types/user.type'
import { verifyCode } from '../../../types/verifyCode.type'
import { useNavigate } from 'react-router-dom'

interface IVerify {
  onComplete : (token:string)=> void , 
  userData : userType
}

const Verify: React.FC<IVerify> = ({onComplete,userData}): JSX.Element => {
  

  const navigate = useNavigate() ;

  const formik = useFormik<verifyCode>({
      
      initialValues : {
        verifyCode : ''
      }, 

      onSubmit:(data:verifyCode,{resetForm})=>{
        console.log('data in verify step: ' , data)

        onComplete('Amir');

        setTimeout(()=>{
          
          resetForm()
          navigate('/');

        },2000)
      }

  }) 
  return <div className='VerfyWrapper w-full h-full flex justify-center'> 

        <div className="verifyFormWrapper w-4/5 sm:w-3/4 max-w-[27rem] py-10 flex justify-center items-center">
            
            <form onSubmit={formik.handleSubmit} className="verifyForm relative w-full min-h-[30rem] rounded-lg border-neutral-200 border-2 shadow-md flex flex-col items-center justify-start gap-4">
                  
                  <div className="verifyFormHeader w-full flex flex-col gap-3 py-5">

                        <div className="formLogoWrapper w-full flex justify-center">
                          <img src="./images/kouroshLogo2.png" alt="formLogo" className='w-20' />
                        </div>

                  </div>

                  <div className="main w-full flex flex-col gap-2">
                    
                    {/* <div className="formTitleWrapper w-full flex justify-start px-4 font-semibold text-xl font-iranyekan">
                          <h1 className="formTitle">
                            ورود | ثبت نام
                          </h1>
                    </div> */}

                    <div className="formDescriptionWrapper w-full flex justify-start font-dana py-2 px-4 text-neutral-600">
                          <p className="formDescription leading-7">
                            لطفا کد تایید پیامک شده به شماره  <span> {userData.phone}</span> را وارد کنید
                          </p>
                    </div>

                        <div className="inputWrapper w-full flex px-4">
                          <input onChange={formik.handleChange} value={formik.values.verifyCode} name='verifyCode' id='verifyCode' type="tell" className='px-3 text-xl text-neutral-600 rounded-lg w-full border-2 border-neutral-300 h-14' />
                        </div>

                  </div>

                        <div className="confirmButtonWrapper w-full px-4 flex justify-center absolute bottom-4">
                            <ConfirmButton />
                        </div>

            </form>
        </div>
  </div>
}

export default Verify