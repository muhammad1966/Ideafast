import React from 'react'
import './services.css'
import expart from '../../assets/exparts.jpg'
import colab from '../../assets/like-minded.jpg'
import help from '../../assets/help.jpg'
const Services = () => {
  return (
    <div className='app-services' id='services'>
      <div className='app-services_exparts'>
        <div>
          <img src={expart} alt="expart" />
          <h3>Meet Thousands of Exparts</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eveniet suscipit! Blanditiis error enim amet! Veniam magni quas impedit nisi.</p>
        </div>
      </div>
      <div className='app-services_colarborate'>
        <div>
          <img src={colab} alt="colab" />
          <h3>Collaborate with Like-minded People</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, esse dolores. Tenetur totam quam ipsum nam laborum nobis velit harum.</p>
        </div>
      </div>
      <div className='app-services_help'>
        <div>
          <img src={help} alt="help" />
          <h3>Help and Inspire Others</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id nostrum ullam odio porro fuga architecto, rerum laboriosam quaerat dolor.</p>
        </div>
      </div>
    </div>
  )
}

export default Services