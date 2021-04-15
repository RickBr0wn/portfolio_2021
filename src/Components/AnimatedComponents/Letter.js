import React from 'react'

const Letter = ({ children }) => {
  const [hovered, setHovered] = React.useState(false)

  const animationTiming = () => {
    setHovered(true)
    setTimeout(() => {
      setHovered(false)
    }, 1000)
  }

  return (
    <span
      className={hovered ? "rubberBand animated" : "rubberBand"}
      onMouseOver={animationTiming}
    >
      {children}
    </span>
  )
}

export default Letter