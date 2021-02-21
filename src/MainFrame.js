import React from 'react'
import Footer from './components/ui/navbar/Footer'
import Header from './components/ui/navbar/Header'

export default function MainFrame(props) {
  return (
    <div>
      <Header/>      

      <div className='ContentContainer'>
        {props.children}
      </div>

      <Footer/>
    </div>
  )
}
