
import React from 'react'
import './blog.css'
import data from './Data'

const lorem = ()=>{
  return(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero aliquam quisquam quis accusamus id nobis recusandae? Recusandae, beatae, sit quo minima eius, dolores repudiandae corporis provident facilis harum voluptatum!"
  )
}

const Blog = () => {
  return (
    <div className='app-blog' id='blog'>
      <h1 className='app-blog_h1'>You may like our blog.</h1>
      <div className='app-blog_content'>
        {data.map((item)=>{
          return(
            <div className='app-blog_content-ent' key={item}>
              <div className='app-blog_content-ent_image'>
                <img src={item.picture} alt="" />
              </div>
              <div className='app-blog_content-ent_text'>
                <h1 className='gradient-text'>{item.title}</h1>
                <p>{item.subtitle + " " + lorem()}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Blog