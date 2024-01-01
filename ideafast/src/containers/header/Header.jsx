import React from 'react'
import './header.css'
import './head.css'
import bulb from '../../assets/light2.png'

const Header = () => {
  return (
    <div className='app-header' id='home'>
      <div className='app-header_content'>
        <h1 className='gradient-text'>Share your crazy ideas with like-minded people across the globe.</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat placeat modi sed excepturi, asperiores officia eos ipsa quo quos nesciunt? Recusandae quaerat perspiciatis optio aut mollitia alias nisi fugit enim.</p>
        <h4>Click here to get started</h4>
      </div>
      <div className='app-header_bulb'>
        <img src={bulb} alt="bulb" />
      </div>
    </div>
  )
}

export default Header