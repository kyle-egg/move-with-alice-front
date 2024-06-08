import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/common/Home.js'
import NavBar from './components/common/NavBar.js'
import Programs from './components/common/Programs.js'
import Exercises from './components/common/Exercises.js'
import Footer from './components/common/Footer.js'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/programs" element={<Programs />} />
          <Route exact path="/exercises" element={<Exercises />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App