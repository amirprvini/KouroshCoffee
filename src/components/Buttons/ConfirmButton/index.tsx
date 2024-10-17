import React, { ComponentProps } from 'react'

type TConfirmButton = ComponentProps<'button'>

const ConfirmButton = ({...rest}:TConfirmButton) => {
  return <button type='submit' className='confirmButton w-full bg-amber-800 rounded-md text-white 
  font-iranyekan font-semibold h-14' {...rest}>ورود</button>
}

export default ConfirmButton