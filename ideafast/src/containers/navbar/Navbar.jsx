import React from 'react'
import { useState } from 'react'
import {RiCloseLine, RiMenu3Line} from 'react-icons/ri'
import './navbar.css'

const Menu = () =>{
  return(
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#services">Services</a></p>
    <p><a href="#desc">About Us</a></p>
    <p><a href="#faqs">FAQ'S</a></p>
    <p><a href="#blog">Blog</a></p>
    <p><a href="#footer">Contact Us</a></p>
    </>
  )
}



const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  
  return (
    <div className='app-navbar'>
      <div className='app-navbar_logo'>
        <h1>IdeaFast</h1>
      </div>
      <div className='app-navbar_links'>
        <Menu />
      </div>
      <div className='app-navbar_signd'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='app-navbar_signm'>
        {
          toggleMenu
          ? <RiCloseLine size={27} color='#C2843A' onClick={()=>setToggleMenu(false)}/>
          : <RiMenu3Line size={27} color='#C2843A' onClick={()=>setToggleMenu(true)}/>
        }
        {
          toggleMenu&&
          (
            <div className='app-navbar_menum scale-up-center'>
                <div className='app-navbar_menum-links'>
                  <Menu />
                  <div className='app-navbar_menum-sing'>
                    <p>Sing In</p>
                    <button type='buttom'>Sign Up</button>
                  </div>
                </div>
                
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar