export default (req, res) => {
  res
  .status(200)
  .end(`
  <a href="/api/post/${Math.floor(Math.random() * 999 + 100)}">Go to a random post (SSR)</a>
  <br>
  <br>
  <br>
  <a href="/"><---- Back to Home</a>
  `)
}