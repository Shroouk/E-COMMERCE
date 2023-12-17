import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Roots from './Pages/Roots';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Product from './Pages/Product';


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
       }
      ],
       
  }
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App;