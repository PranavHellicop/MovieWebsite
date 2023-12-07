import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AppProvider } from './context/AppContext.js'
import './App.css'


import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,

} from "react-router-dom"
import { Home } from './components/home.jsx'
import { SingleMovie } from "./components/SingleMovie.jsx"
import { Error } from "./components/Error.jsx"
import { Movies } from './components/Movies.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
      </Route>
      <Route path='movie/:id' element={<SingleMovie />}>
      </Route>
      <Route path="*" element={<Error />}></Route>
    </Route>

  )
)

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Home/>
//   },
//   {
//     path:"movies/:id",
//     element:<SingleMovie/>
//   },
//   {
//     path:"*",
//     element:<Error/>
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

{/* <AppProvider value="kukkufvd"> */}
    
      <RouterProvider router={router}>

        <App />
      </RouterProvider>
      {/* </AppProvider> */}
  </React.StrictMode>,
)
