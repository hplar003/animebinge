import React from 'react'
import './row.css'
import Card from '../card/Card'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

const Row = ({data,rowId,isThrowback}) => {

  const slideLeft = () => {
    let slider = document.getElementById('slider' + rowId)
    console.log(slider)
    slider.scrollLeft = slider.scrollLeft - 500
}
const slideRight = () => {
    let slider = document.getElementById('slider'+rowId)
    slider.scrollLeft = slider.scrollLeft + 500
}
  return (
    <div className='row' >
      <MdChevronRight onClick={slideRight} style={{ position:'absolute',top:'50%',right:'0',zIndex:'100',cursor:'pointer',background:'#fff',color:'#000',borderRadius:'999px',opacity:'0.3' }} size={40} className='arrow' />
          <div id={'slider' + rowId} className="slider">
              {data.map((item,id) => (
                <Card  key={id} item={item} width={!isThrowback ? '516px' : '409px'} height={!isThrowback ? '291px' : '427px'} />
              ))}
          </div>


      <MdChevronLeft  onClick={slideLeft} style={{ position:'absolute',top:'50%',left:'0',zIndex:'100',cursor:'pointer',background:'#fff',color:'#000',borderRadius:'999px',opacity:'0.3'}} size={40}  />
    </div>
  )
}

export default Row