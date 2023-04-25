import React from 'react'
import Navbar from './Navbar';

function Header() {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1><span>GreenTech Recycling Solutions</span>for e-Waste and Li Batteries</h1>
            <p className='details'>Proper recycling of e-waste and Li batteries can reduce the environmental impact of these materials. Recycling facilities can recover valuable metals and components from e-waste and Li batteries, which can be reused in the production of new products, reducing the need for mining and manufacturing</p>
            <a href='#' className='cv-btn'>Details</a>
        </div>
    </div>
  )
}

export default Header;