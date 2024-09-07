import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayOut from '../components/Layout'
import HomePage from '../pages/HomePage'
import OrderPage from '../pages/OrderPage'

interface RouteProviderPros {} 

const RouteProvider: React.FC<RouteProviderPros> = ():JSX.Element => {
  return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LayOut/>}>
                <Route index element={<HomePage/>} />
                <Route path='/order' element={<OrderPage/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RouteProvider