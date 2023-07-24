const express = require('express')
const router = express.Router()
const { reqgisterUser, loginUser, getMe } = require('../controllers/userController')


router.post('/', reqgisterUser)
router.post('/login', loginUser)
router.get('/me', getMe)

module.exports = router