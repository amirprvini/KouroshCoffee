import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

interface LayOutProps {}

const LayOut: React.FC<LayOutProps> = (): JSX.Element => {
  return <div className='layOutWrapper'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
}

export default LayOut