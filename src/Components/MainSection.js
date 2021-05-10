import React from 'react'
import AnimatedWord from './AnimatedComponents/AnimatedWord'

export default function MainSection({ offsetY }) {
  return (
    <div className="main-section-container" style={{ transform: `translate(${offsetY * 1.6}px, ${offsetY}px)`}}>
        <h1>Hi, my name is</h1>
        <AnimatedWord word={"Rick Brown"} />
        <h1>{"& I love to create unique user experiences"}</h1>
        <h1>{"for both the web and iOS devices."}</h1>
    </div>
  )
}
