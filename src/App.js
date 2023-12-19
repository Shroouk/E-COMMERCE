import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Roots from './Pages/Roots';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Roots/>,
    children:[
      {
       index: true, element: <Home/>
       },
       {
        path:'shop',
        children:[
          {index:true, element:<Shop />},
          {path:':productId', element: <Product/>}
        ]
        
       },
       {
        path:'product', element: <Product/>
       },
       {
        path:'login', element: <LoginSignUp/>
       }
      ],
       
  }
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App;