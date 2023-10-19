import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import ErrorPage from './Components/ErrorPage';
import AuthProvider from './Components/Provider/AuthProvider';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import AddBrand from './ProductManagement/AddBrand';
import PrivateRoute from './Components/Private/PrivateRoute';
import AddProduct from './ProductManagement/AddProduct';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5001/brands')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }, 
      {
        path: '/addBrand',
        element: <PrivateRoute><AddBrand></AddBrand></PrivateRoute>
      },
      {
        path: '/addProduct', 
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)