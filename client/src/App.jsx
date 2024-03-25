import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import {createBrowserRouter,Outlet,RouterProvider,ScrollRestoration} from 'react-router-dom'
import { productsData } from './api/Api'
import Product from './components/Product'

const Layout=()=>{
  return (
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
};
const router=createBrowserRouter([{
  path:"/",
  element:<Layout />,
  children:[
    {
    path:"/",
    element:<Home/>,
    loader:productsData
    },
    {
      path:"product/:id",
      element:<Product/>
    },
    {
      path:"/cart",
      element:<Cart/>,
    }
  ]
}])
function App() {

  return (
    <div className='font-bodyFont'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
