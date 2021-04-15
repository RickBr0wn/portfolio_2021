import AnimatedLetter from './AnimatedLetter'

const AnimatedWord = ({ word }) => {
  const letters = Array.from(word)
  return <div className="text">{letters.map((letter, index) => {
    if (letter === " ") {
      return <AnimatedLetter key={index} index={index}>
        <div className='blank'>
          _
        </div>
      </AnimatedLetter>
    }
    return <AnimatedLetter key={index} index={index}>{letter}</AnimatedLetter>
  })}</div>
}

export default AnimatedWord