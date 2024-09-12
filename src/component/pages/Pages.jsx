import React from 'react';
import {  RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import About from '../about/About';
import Blog from '../blog/Blog';
import Contact from '../contacts/Contact';
import Home from '../home/Home';
import Layout from '../Layout';
import Pricing from '../pricing/Pricing';
import Services from '../services/Services';

const Pages = () => {

    let routers = createHashRouter(
        [
            {path:"" , element:<Layout/> , children:[

                { index:true , element:<Home />},
                { path:'/about' , element:<About />},
                { path:'/services' , element:<Services />},
                { path:'/blog' , element:<Blog />},
                { path:'/pricing' , element:<Pricing />},
                { path:'/contact' , element:<Contact />},

            ]}
        ]
    )
    return(
        <>

       <RouterProvider router={routers}></RouterProvider>
        {/* <BrowserRouter>
        <Header/>

        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/pricing' element={<Pricing />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
    
        </Routes>
        
        <Footer />
        </BrowserRouter> */}


        </>
    ) 
}


export default Pages;