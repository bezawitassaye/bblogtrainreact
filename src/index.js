import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Category from "./components/Category"
import Layout from './Layout';
import Authorpost from "./components/Authorposts"
import Authors from "./components/Authors"

import Createpost from "./components/Createpost"
import Dashboard from "./components/Dashboard"
import Deletepost from "./components/Deletepost"
import Editpost from "./components/Editpost"
import Errorpage from "./components/Errorpage"
import Home from "./components/Home"
import Login from "./components/Login"
import Logout from "./components/Logout"
import Postdetail from "./components/Postdetail"
import Register from "./components/Register"
import Userprofile from "./components/Userprofile"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<Errorpage/>,
    children:[
      {index:true,element:<Home/>},
      {path:"posts/:id",element:<Postdetail/>},
      {path:"register",element:<Register/>},
      {path:"login",element:<Login/>},
      {path:"profile/:id",element:<Userprofile/>},
      {path:"authors",element:<Authors/>},
      {path:"create",element:<Createpost/>},
      {path:"posts/categories/:category",element:<Category/>},
      {path:"posts/users/:id",element:<Authorpost/>},
      {path:"myposts/:id",element:<Dashboard/>},
  
      {path:"posts/:id/edit",element:<Editpost/>},
      {path:"posts/:id/delete",element:<Deletepost/>},
      {path:"logout",element:<Logout/>}
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

