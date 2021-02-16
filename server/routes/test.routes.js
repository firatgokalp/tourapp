const { Router } = require('express')

const router = Router()

/**
 * @swagger
 * /test:
 *   get:
 *     tags:
 *       - "test"
 *     summary: Test endpoint
 *     description: Nuxt+API test endpoint.
*/
router.get('/test', (req, res) => {
  res.end('Test API!')
})

module.exports = router
