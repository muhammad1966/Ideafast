import React from 'react'
import './footer.css'
import { SocialIcon } from 'react-social-icons'



const Footer = () => {
  
  return (
    <div className='app-footer' id='footer'>
      <div className='app-footer_content'>
        <div>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet me and elk collect coins and.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet because kill rat disk.</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet by musa and folly.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>
      <div className='app-footer_logos'>
          <SocialIcon className="socicon"  bgColor='#555555' fgColor='#2D313A' url='www.x.com' href='www.x.com' />
          <SocialIcon className="socicon"  bgColor='#555555' fgColor='#2D313A' url='www.facebook.com'/>
          <SocialIcon className="socicon"  bgColor='#555555' fgColor='#2D313A' url='www.pinterest.com'/>
          <SocialIcon className="socicon"  bgColor='#555555' fgColor='#2D313A' url='www.tiktok.com'/>
          <SocialIcon className="socicon"  bgColor='#555555' fgColor='#2D313A' url='www.instagram.com'/>
          <SocialIcon className="socicon"  bgColor='#555555' fgColor='#2D313A'  url='www.linkedin.com'/> 
      </div>
      <div className='app-footer_copy'>
       <h4> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam illum eligendi praesentium asperiores doloremque iste libero cumque adipisci laborum amet!</h4>
      </div>
    </div>
  )
}

export default Footer