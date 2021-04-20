const { Router } = require('express')
const router = Router()

const {
    callQuery
} = require('../controllers/index.controllers')

router.get('/llamar/:data', callQuery)

module.exports = router