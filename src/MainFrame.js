import React from 'react'
import Footer from './components/ui/navbar/Footer'
import Header from './components/ui/navbar/Header'

export default function MainFrame(props) {
  return (
    <div>

      <Header/>
      
      <div className='content'>
        {props.children}
      </div>

      <Footer/>

    </div>
  )
}
