export default function Blog({ offsetY }) {
  console.log(offsetY)
  return (
    <>
      <div
        className="portfolio-moving-part"
        style={{ transform: `translate(-${offsetY * 3}px, ${offsetY}px)` }}>
        <h1>Portfolio</h1>
        <img src="https://picsum.photos/200" />
      </div>
    </>
  )
}
