const express = require('express')
const { MongoClient } = require('mongodb')
const { mongoURI } = require('../../config.json')

const router = express.Router()

router.get('/', async (req, res) => {
    const client = new MongoClient(mongoURI)

    const data = await client.db('CareerChoice').collection('techCareer').find().toArray()
    
    res.send(data)
})

module.exports = {
    router: router,
    route: '/careers'
}