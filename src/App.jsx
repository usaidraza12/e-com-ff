import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import 'aos/dist/aos.css';




import './App.css'
import Home from './home'
import Contact from './contact'
import Services from './services'
// import { useContext } from 'react'
import About from './about'
import Navbar from './navbar'
import { useContext } from 'react'

// import { contercontext } from './context'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Addchart from './chart'
import Detail from './detail'
import Usercontext from './context'
import Login from './login';
import Sign from './sign';
import CartPage from './chart';
// import Module from '../tailwind.config'

function App() {
  const [count, setCount] = useState(0)
  // const data=useContext(contercontext)
  const router=createBrowserRouter([
     

    {
      path:"/",
      element:<Navbar/>,

      children:[
        {
          path:"/",
      element:<Home/>,
        },  {
          path:"/contact",
      element:<Contact/>,
        },  {
          path:"/services",
      element:<Services/>,
        },  {
          path:"/about",
      element:<About/>,
        }, {
          path:"/detail",
      element: <Detail/>  ,
        },{
          path:"/add",
      element:<Addchart/>,
        },{
          path:"/login",
      element:<Login/>,
        },{
          path:"/sign",
      element:<Sign/>,
        },{
          path:"/cart",
      element:<CartPage/>,
        }
      ]

    }

  ])

  return (
    <>
    {/* <contercontext.Provider value={data}> */}
        <RouterProvider router={router}/>
      
       
        {/* </contercontext.Provider> */}
    </>
  )
}

export default App
