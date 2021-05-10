import React, { useCallback, useEffect, useState } from 'react'

const AnimatedLetter = ({ children, index }) => {
  const [hovered, setHovered] = useState(false)

  const animationTiming = useCallback(() => {
    setHovered(true)
    setTimeout(() => {
      setHovered(false)
    }, 1000 + index * 100)
  }, [index])

  useEffect(() => {
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
