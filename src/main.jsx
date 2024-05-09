import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Route/Route';
import { RouterProvider } from "react-router-dom";
import ContextProvider from './components/provider/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
      <ToastContainer/>
    </ContextProvider>
  </React.StrictMode>

);




