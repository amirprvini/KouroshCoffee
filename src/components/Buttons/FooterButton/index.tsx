import React, { ComponentProps } from 'react'

// type TFooterButton = ComponentProps<'button'> 

interface IFooterButton extends React.ComponentProps<'button'> {
    title: string
}

const FooterButton: React.FC<IFooterButton> = ({title}): JSX.Element => {
  return <button className='footerButton bg-black text-white px-2 py-1 rounded-xl text-xl border-2 border-white font-dana'>
            {title}
  </button>
}

export default FooterButton
