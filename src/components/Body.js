import React from 'react'
import SidePanel from './SidePanel'
import MainBody from './MainBody'

const Body = () => {
  return (
    <div className='grid grid-flow-col col-span-12'>
        <SidePanel/>
        <MainBody/>
    </div>
  )
}

export default Body;