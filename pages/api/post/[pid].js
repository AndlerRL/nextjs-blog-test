export default (req, res) => {
  const {
    query: { pid },
  } = req

  res
  .status(200)
  .end(`
    <h1>Post: ${pid}</h1>
    <a href="/api/post">Go back to main</a>
  `)
}