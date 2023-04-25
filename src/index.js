const express = require('express')
const { MongoClient } = require('mongodb')
const fs = require('fs')
const path = require('path')

const app = express()
app.use(express.json())

// Import and set routes located in src/routes
const routesPath = path.join(__dirname, 'routes')
const routeFiles = fs.readdirSync(routesPath).filter(file => file.endsWith('.js'))
for (const file of routeFiles) {
    const router = require(path.join(routesPath, file))
    app.use(router.route, router.router)
}

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))