import React from 'react'
import Logo from '../Images/rb_logo.png'

function Header() {
  const [isSelected, setIsSelected] = React.useState('home')

  return (
    <div className="header-container">
      <div className="header-logo">
      <img src={Logo} className="header-logo" alt="rb" />
      </div>
      <div className="header-navigation-container">
        <div 
          className={`header-navigation-item ${isSelected === 'home' ? 'header-navigation-underlined' : ""}`} 
          onClick={() => setIsSelected('home')}
          >
          Home
        </div>
        <div 
          className={`header-navigation-item ${isSelected === 'blog' ? 'header-navigation-underlined' : ""}`} 
          onClick={() => setIsSelected('blog')}
          >
          Blog
        </div>
        <div 
          className={`header-navigation-item ${isSelected === 'about' ? 'header-navigation-underlined' : ""}`}
          onClick={() => setIsSelected('about')}
          >
          About
        </div>
      </div>
    </div>
  )
}

export default Header