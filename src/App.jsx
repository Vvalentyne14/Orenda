import { useState } from 'react'

import './App.css'
import Home from './components/Home/Home'
import PrivacyPolicy from './components/Privacy/PrivacyPolicy'
import Blog from './components/Blog/Blogs'


function App() {
  return (
    <div className="">
      <div className="wrapper">
        <Home/>
        <PrivacyPolicy/>
        <Blog/>
      </div>
    </div>
  )
}

export default App
