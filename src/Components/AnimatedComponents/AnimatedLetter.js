import React from 'react'

const AnimatedLetter = ({ children, index }) => {
  const [hovered, setHovered] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      animationTiming()
    }, 500 + (index * 100));
  }, [])

  const animationTiming = () => {
    setHovered(true)
    setTimeout(() => {
      setHovered(false)
    }, 1000)
  }

  setInterval(() => {
    animationTiming()
  }, 30000 + (index * 100))

  return (
    <span
      className={hovered ? "rubberBand animated" : "rubberBand"}
      onMouseOver={animationTiming}
    >
      {children}
    </span>
  )
}

export default AnimatedLetter