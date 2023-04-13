
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Main from "./layouts/Main";
import About from "./Components/About/About";
import Shop from "./Components/Shop/Shop";
import Order from "./Components/Orders/Order";
import Sama from "./Components/Inventory/Sama";
import { ProductAndCart } from "./Components/Loaders/Products&Cart";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element : <Main></Main>,
      children :[
        {
          path:'/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        }
        ,
    
        {
          path:'/order',
          loader: ProductAndCart,
          element : <Order></Order>
        },
    {
      path: '/sama',
      element: <Sama></Sama>
    }
    ,
    {
      path: '/about',
      element : <About></About>
    },
    {
      path: '/login',
      element : <Login></Login>
    },
    {
      path: '/signUp',
      element : <SignUp></SignUp>
    }




      ]
    },





  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
