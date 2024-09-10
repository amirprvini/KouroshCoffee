import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayOut from '../components/Layout'
import HomePage from '../pages/HomePage'
import OrderPage from '../pages/OrderPage'
import ProductsPage from '../pages/ProductsPage'
import EventsPage from '../pages/EventsPage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'

interface RouteProviderPros {} 

const RouteProvider: React.FC<RouteProviderPros> = ():JSX.Element => {
  return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LayOut/>}>
                <Route index element={<HomePage/>} />
                <Route path='/order' element={<OrderPage/>} />
                <Route path='/products' element={<ProductsPage/>} />
                <Route path='/events' element={<EventsPage/>} />
                <Route path='/about' element={<AboutPage/>} />
                <Route path='/contact' element={<ContactPage/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RouteProvider