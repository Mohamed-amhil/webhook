const express = require('express')
const router = express.Router()
const actions = require('./actions')

router.post('/', actions.receivePdf);

module.exports = router