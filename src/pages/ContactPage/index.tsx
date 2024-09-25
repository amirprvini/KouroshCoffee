import React from 'react'

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = (): JSX.Element => {
  return <div className='contactPageWrapper w-full py-4 flex justify-center items-center'>
        
        <div className="contact w-96 h-96 rounded-md shadow-2xl px-2 py-1 flex flex-col justify-center items-center gap-2 border-2 border-neutral-200 ">
              
              <div className="socialMediaWrapper w-full flex justify-start text-2xl px-4 gap-3">
                    <p className='font-mono'> KouroshCoffeeshop@ </p>
                    <img src="https://www.flaticon.com/free-icons/instagram" alt="" />
              </div>

              <div className="phoneWrapper w-full px-4 flex justify-start text-2xl gap-3">
                    <p className='font-sans'> 02126376920 </p>
              </div>

              <div className="iphoneWrapper w-full px-4 flex justify-start text-2xl gap-3">
                    <p className='font-sans'> 1-1-110 </p>
              </div>

        </div>
  </div>
}

export default ContactPage