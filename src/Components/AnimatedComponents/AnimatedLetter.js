import React from 'react'

const AnimatedLetter = ({ children, index }) => {
  const [hovered, setHovered] = React.useState(false)

  const animationTiming = React.useCallback(() => {
    setHovered(true)
    setTimeout(() => {
      setHovered(false)
    }, 1000 + index * 100)
  }, [index])

  React.useEffect(() => {
    setTimeout(() => {
      animationTiming()
    }, 1000 + index * 100)

    return () => setHovered(false)
  }, [animationTiming, index])

  setInterval(() => {
    animationTiming()
  }, 10000 + index * 100)

  return (
    <span
      className={hovered ? 'rubberBand animated' : 'rubberBand'}
      onMouseOver={animationTiming}>
      {children}
    </span>
  )
}

export default AnimatedLetter
