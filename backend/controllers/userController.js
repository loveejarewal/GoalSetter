
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const reqgisterUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    // check if user exits
    const userExits = await User.findOne({ email })
    if (userExits) {
        res.status(400)
        throw new Error('user alerdy exit ')

    }
    // hash password 
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //  create user
    const user = await user.create({
        name,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        })
    } else {
        res.status(400)
        throw new Error('invalid user data ')
    }
})
// res.json({message: 'Register User'}))

const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: 'login user' })
})

const getMe = asyncHandler(async (req, res) => {
    // res.json({ message: 'user data display' })
    const {_id, name, email} = await User.findById(req.user.id)
    res.status(200).json({
        _id: _id, name, email,
    })
})
// generate jwt 
const generateToken= (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: '30d', 
    })
}



module.exports = {
    reqgisterUser, loginUser, getMe
}