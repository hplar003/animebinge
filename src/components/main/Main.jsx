import React, { useState } from 'react'
import './main.css'
import Hero from '../../assets/hero.png'
import {AiFillStar,AiFillHeart} from 'react-icons/ai'
import {FaPlay} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Main = () => {
    const [isFavorite, setIsFavorite] = useState(false)
    const handleHeart = () => {
        setIsFavorite(isFavorite => !isFavorite)
    }

  return (
    <div className='main'>
        <div className='hero-section'>
        <div className="overlay"></div>
            <img src={Hero} alt="hero" />
        <div className='hero-text'>
            <h1>Kimetsu no Yaiba</h1>
            <p className='category'><AiFillStar color='#FBC94A'></AiFillStar> Category: Adventure fiction, Dark fantasy, Martial Arts</p>
            <div className="hero-desc">
                <p>Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family was slaughtered and his younger sister Nezuko turned into a demon.</p>
            </div>
           <div className="hero-action">
                <button><FaPlay  style={{ paddingRight:'10px',color:'#fff'}} />Watch now</button>
                <div className='heart'>
                    <AiFillHeart style={{ color: isFavorite ? 'red' : 'white' }} onClick={handleHeart} size='1.5rem' />
                </div>
           </div>
           <div className='hero-footer'>
               <div className='hero-footer-list'>
                    <p><NavLink to='/' className={ ({ isActive }) => (isActive ? 'active' : '')}>Overview</NavLink></p>
                    <p><NavLink to='/episodes' className={ ({ isActive }) => (isActive ? 'active' : '')}>Episodes</NavLink></p>
                    <p><NavLink to='/details' className={ ({ isActive }) => (isActive ? 'active' : '')}>Details</NavLink></p>
               </div>
               <div className='marker'>
                <div className='ellipse'></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
               </div>
           </div>
          
        </div>
          
        </div>
    </div>
  )
}

export default Main