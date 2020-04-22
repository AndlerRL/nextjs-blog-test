import jwt from 'jsonwebtoken'

export default (req, res) => {
  const token = jwt.sign(
    {
    name: 'Robertito'
    },
    'shhh!itsasecret!',
  )

  res.setPreviewData({

  })
  res.end('Preview mode enabled')
}