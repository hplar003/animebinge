import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { episodes } from '../../constant'
import Card from '../card/Card'
import './episodes.css'
import Featured from '../../assets/aot2.png'

const Episodes = () => {
  return (
    <div className='section'>
        <h2>Trending <span>this week</span></h2>
        <div className="container">
            <div className="overview">
            <div className='card' >
                <img src={Featured} alt='featured' style={{ width: '516px',height:'621px' }} />
                <div className="card-overlay">
                    <p className='card-title'>Attack on Titans</p>
                    <p className='card-category'>Category: Adventure fiction, Dark fantasy, Martial Arts</p>
                    <p className='card-rating'><AiFillStar color='#FBC94A'/>5.0 </p>
                </div>
            </div>
            <div className='featured-description'>
                    <p>
                    When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the human…
                    </p>
                </div>
            </div>
            <div className="episode">
                <div className='episodes-header'>
                    <h2>Episodes</h2>
                    <h3>Season 1</h3>
                </div>
                
                {episodes.map((item,id) => (
                    <div key={id} className='episodes'>
                     <Card item={item} width='448px' height='252px' />
                        <div className="episodes-description">
                        <p className='episodes-num'>Episode {item.id}</p>
                        <p className='episodes-desc'>{item.description}</p>
                        </div>
                    </div>
                   
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default Episodes