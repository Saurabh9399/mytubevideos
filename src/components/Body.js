import React from 'react'
import SidePanel from './SidePanel'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='grid grid-flow-col col-span-12'>
        <SidePanel/>
        <Outlet/>
    </div>
  )
}

export default Body;