import React, { createContext, useContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayOut from '../components/Layout'
import HomePage from '../pages/HomePage'
import OrderPage from '../pages/OrderPage'
import ProductsPage from '../pages/AllProductsPage'
import EventsPage from '../pages/EventsPage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import AllProductsPage from '../pages/AllProductsPage'
import ProductPage from '../pages/ProductPage'
import LoginPage from '../pages/LoginPage'


export const AppContext = createContext<any>({})

interface RouteProviderPros {} 

const RouteProvider: React.FC<RouteProviderPros> = ():JSX.Element => {
  const [user,setUser] = useState<string>('');
  return(
    <AppContext.Provider value={{
      user,
      setUser
    }}>

      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LayOut/>}>
                <Route index element={<HomePage/>} />
                <Route path='/order' element={<OrderPage/>} />
                <Route path='/products' element={<AllProductsPage/>} />
                <Route path='/products/:id' element={<ProductPage/>} />
                <Route path='/events' element={<EventsPage/>} />
                <Route path='/about' element={<AboutPage/>} />
                <Route path='/login'  element={<LoginPage/>} />
                <Route path='/contact' element={<ContactPage/>} />
            </Route>
        </Routes>
    </BrowserRouter>

    </AppContext.Provider>
  )
}

export default RouteProvider