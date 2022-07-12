import React from 'react'
import Card from '../../components/card/Card'
import Row from '../../components/row/Row'
import { trendingAnime,throwbackAnime } from '../../constant'
import './home.css'

const Home = () => {
  return (
    <div className='section'>
      <h2>Trending <span>this week </span></h2>
      <Row data={trendingAnime} rowId={1} isThrowback={false} />
      <h2>Throwback Anime</h2>
      <Row data={throwbackAnime} rowId={2} isThrowback={true}>
        
      </Row>
    </div>
  )
}

export default Home