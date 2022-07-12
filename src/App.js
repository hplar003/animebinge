import React from 'react'
import Navbar from './components/navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Discover from './pages/discover/Discover'
import About from './pages/about/About'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import './index.scss'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import Episodes from './components/episodes/Episodes'

const App = () => {
  return (
    <div>
        <Main />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/discover' element={<Discover/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/episodes' element={<Episodes/>}></Route>
        </Routes>
        <Footer />
    </div>
  )
}

export default App