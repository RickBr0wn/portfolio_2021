import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import MainSection from './Components/MainSection'
import Footer from './Components/Footer'
import Blog from './Components/Blog'
import Portfolio from './Components/Portfolio'

function App() {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => {
    console.log(window.pageYOffset)
    setOffsetY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <>
      <div className="parent">
        <Header />
      </div>
      <MainSection offsetY={offsetY} />
      <Blog offsetY={offsetY} />
      <Portfolio offsetY={offsetY} />
      <div className="parent">
        <Footer />
      </div>
    </>
  )
}

export default App
