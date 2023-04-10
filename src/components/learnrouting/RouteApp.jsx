import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import Products from './Products';
import NewProducts from './NewProducts';
import OldProducts from './OldProducts';
import NavBar from './NavBar';
import NoMatch from './NoMatch';
import Users from './Users';
import UserDetails from './UserDetails';

//import About from './About';
const LazyAbout=React.lazy(()=>import("./About"));

function RouteApp() {
  return (
    <>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />


            <Route path="/about" element={<React.Suspense fallback="Loading...">   <LazyAbout />  </React.Suspense>} />
            
            
            <Route path="/products" element={<Products />} >
                <Route path='new-products' element={<NewProducts />} />
                <Route path='old-products' element={<OldProducts />} />
                <Route index element={<h3>Default route to be displaced at outlet</h3>} />
            </Route>
            <Route path='*' element={<NoMatch />} />
            <Route path="/users" element={<Users />} >
                <Route path=':id' element={<UserDetails />} />
                <Route path="admin" element={<h4>Admin User</h4>} />
            </Route>
        </Routes>
    </>
  )
}

export default RouteApp