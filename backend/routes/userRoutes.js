const express = require('express')
const router = express.Router()
const { reqgisterUser, loginUser, getMe } = require('../controllers/userController')
const {protect }= require('../Middleware/authMiddleware')

router.post('/', reqgisterUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router