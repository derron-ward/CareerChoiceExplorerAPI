const express = require('express')
const { MongoClient } = require('mongodb')
const { mongoURI } = require('../../config.json')

const router = express.Router()

router.get('/', async (req, res) => {
    console.log('REQUEST')
    const client = new MongoClient(mongoURI)

    const data = await client.db('CareerChoice').collection('techCareer').find().toArray()
    console.log(data)
    
    res.send(data)
})

module.exports = {
    router: router,
    route: '/careers'
}