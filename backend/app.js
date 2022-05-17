const express = require('express')

const app = express()

app.use((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
    )
  next()
})

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'tsj3',
      title: 'First-server-side post',
      content: 'this is coming from the server'
    },
    {
      id: 't837f',
      title: 'Second-server-side post',
      content: 'this is coming from the server'
    }
  ]
  res.status(200).json({
    message: 'Posts fetched succesfully',
    posts: posts
  })
})

module.exports = app
