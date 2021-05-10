export default function Blog({ offsetY }) {
  console.log(offsetY)
  return (
    <>
      <div className="blog-background-image" style={{ transform: `translateY(${offsetY * 0.2}px)`}}/>
      <div className="blog-moving-part" style={{ transform: `translateY(${offsetY / 0.4}px)`}}/>
    </>
  )
}