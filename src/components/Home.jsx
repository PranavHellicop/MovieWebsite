import React from 'react'
import { Outlet } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import {Search} from  './Search'
import { Movies } from './Movies'

export const Home = () => {
  const name = useApp()

  return (
    <div>
     
      <Search></Search>
      <Movies></Movies>
      {/* <Outlet/> */}
    </div>
  )
}
