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
import Products from './ProductManagement/Products';
import BrandProduct from './ProductManagement/brandProduct';
import UpdateProduct from './ProductManagement/UpdateProduct';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5001/brands'),
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
      },
      {
        path: '/products',
        element: <Products></Products>,
        loader: () => fetch('http://localhost:5001/products')
      },
      {
        path: '/updateProduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5001/products/${params.id}`)
      },
      {
        path: '/brands/:brandName',
        element: <BrandProduct></BrandProduct>,
        loader: () => fetch('http://localhost:5001/products')
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