import { useState } from 'react'

import './App.css'
import Home from './components/Home/Home'
import PrivacyPolicy from './components/Privacy/PrivacyPolicy'

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        {/* <Home/> */}
        <PrivacyPolicy/>
      </div>
    </div>
  )
}

export default App
