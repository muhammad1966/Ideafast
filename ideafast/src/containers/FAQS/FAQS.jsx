import React from 'react'
import './faqs.css'
import data from './Data'
import {BsPlus, BsDash} from 'react-icons/bs'
import { useState } from 'react'

const FAQS = () => {
  const [selected, setSelected] = useState(null)

  const handleClick = (i)=>{
    if(selected === i){
      setSelected(null)
    }
    else{
      setSelected(i)
    }

  }
  return (
    <div className='app-faqs' id='faqs'>
      <div className='app-faqs_title'>
        <h1>
          FAQ's
        </h1>
      </div>
      <div className='app-faqs_content'>
        {data.map((item, i)=>{
          return(
            <div className='accordion' key={i}>
              <div className='quest-div' onClick={()=> handleClick(i)}>
                <h3>{item.quest}</h3>
                {selected === i ? <BsDash size={20} color='#C2843A'/> : <BsPlus size={20} color='#C2843A' />}
                
              </div>
              <div className={selected === i ? 'ans-div show': 'ans-div'}>
                <p>{item.answer}</p>
              </div>
            </div>
            
          )
        })}
      </div>
    </div>
  )
}

export default FAQS