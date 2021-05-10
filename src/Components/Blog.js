export default function Blog({ offsetY }) {
  console.log(offsetY)
  return (
    <>
      <div
        className="blog-background-image"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      />
      <div
        className="blog-moving-part"
        style={{ transform: `translateY(${offsetY * 2}px)` }}>
        <h1>Blog</h1>
        <img src="https://picsum.photos/200" />
      </div>
    </>
  )
}
