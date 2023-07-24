

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const reqgisterUser = asyncHandler(async(req, res)=>{
const {name, email, password} = req.body
if(!name || !email || !password){
    res.status(400)
    throw new Error('Please add all fields')
}

    res.json({message: 'Register User'})
})

const loginUser = asyncHandler(async (req, res)=>{
    res.json({message: 'login user'})
})

const getMe = asyncHandler( async(req, res)=>{
    res.json({message: 'user data display'})
})




module.exports = {
    reqgisterUser, loginUser, getMe
}