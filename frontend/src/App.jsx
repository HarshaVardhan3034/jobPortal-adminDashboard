import React, { useState } from 'react'

import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
const App = () => {
  const [showCreateJobModal, setShowCreateJobModal] = useState(false);

  return (
    <>
      <Navbar setShowCreateJobModal={setShowCreateJobModal}/>
      <Routes>
        <Route path='/' element={<Home showCreateJobModal={showCreateJobModal} setShowCreateJobModal={setShowCreateJobModal}/>}/>
        <Route path='/findJobs' element={<Home/>}/>
        <Route path='/findTalents' element={<Home/>}/>
        <Route path='/aboutUs' element={<Home/>}/>
        <Route path='/testimonials' element={<Home/>}/>
        <Route path='/createJobs' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App