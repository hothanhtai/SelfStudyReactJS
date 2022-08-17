import React from 'react'
import ContentArea from '../ContentArea/ContentArea'

import Sidebar from '../Sidebar/Sidebar'
import "./MainContent.css"

const MainContent = () => {
  return (
    <div className='main-content'>
        <Sidebar/>
        <ContentArea/>
    </div>
  )
}

export default MainContent