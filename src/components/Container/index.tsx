import React from 'react'

interface IContainer extends React.PropsWithChildren {}

const Container: React.FC<IContainer> = ({children}): JSX.Element => {
  return <div className='container mx-auto h-full'>
        {children}
  </div>
}

export default Container