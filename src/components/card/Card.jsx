import React from 'react'
import './card.css'
import {AiFillStar} from 'react-icons/ai'

const Card = ({ item,width,height }) => {
  return (
  <>
        
            <div className='card' >
                <img src={item.image} alt={item.title} style={{ width: width,height:height }} />
                <div className="card-overlay">
                    {item.title ? <p className='card-title'>{item.title}</p> : ''}
                    {item.category ? <p className='card-category'>Category: {item.category.join(' ')} </p> : ''}
                   { item.rating ? <p className='card-rating'><AiFillStar color='#FBC94A'/> <span>{item.rating}</span> </p> : ''}
                </div>
            </div>
        
   </>
  )
}

export default Card