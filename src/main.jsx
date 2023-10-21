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
import UpdateProduct from './ProductManagement/UpdateProduct';
import BrandProducts from './ProductManagement/Product/BrandProducts';
import ProductDetails from './ProductManagement/ProductDetails';
import Cart from './ProductManagement/Cart';



const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://tech-ph-electronics-ow4bfvch6-mostafa-s-asifs-projects.vercel.app/brands'),
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
        loader: () => fetch('https://tech-ph-electronics-ow4bfvch6-mostafa-s-asifs-projects.vercel.app/products')
      },
      {
        path: '/updateProduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`https://tech-ph-electronics-ow4bfvch6-mostafa-s-asifs-projects.vercel.app/products/${params.id}`)
      },
      {
        path: '/brands/:bName',
        element: <BrandProducts></BrandProducts>,
        loader: () => fetch('https://tech-ph-electronics-ow4bfvch6-mostafa-s-asifs-projects.vercel.app/products')
      },
      {
        path: '/productDetails/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://tech-ph-electronics-ow4bfvch6-mostafa-s-asifs-projects.vercel.app/products/${params.id}`)
      },
      {
        path: '/cart/:email',
        element: <Cart></Cart>,
        loader: ({ params }) => fetch(`https://tech-ph-electronics-ow4bfvch6-mostafa-s-asifs-projects.vercel.app/addToCart/${params.email}`)
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