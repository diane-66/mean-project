const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
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

app.post('/api/posts', (req, res) => {
  const post = req.body
  console.log(post)
  res.status(201).json({
    message: 'new post added successfully'
  })
})

app.get('/api/posts', (req, res) => {
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
