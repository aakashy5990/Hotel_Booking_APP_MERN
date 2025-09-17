import React from 'react'
import Navbar from './components/Navbar'
import { useLocation, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Footer from './components/Footer'
import AllRooms from './page/AllRooms'

const App = () => {

  const isOwnerPath = useLocation().pathname.includes('owner')

  return (
    <div>
      { !isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={ <Home/> }></Route>
          <Route path='/rooms' element={ <AllRooms/> }></Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App