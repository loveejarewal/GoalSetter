const asyncHanlder = require('express-async-handler')

const Goal = require('../models/goalModel')


const getGoals = asyncHanlder(async (req, res) => {
    const goals = await Goal.find({user: req.user.id})

    res.status(200).json(goals)
})

const setGoals = asyncHanlder(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add a text field ')
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    })

    res.status(200).json(goal)
})
const updateGoal = asyncHanlder(async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.params.body, 
        {
        new: true,
    })
    res.status(200).json(updatedGoal)
})

const deleteGoal = asyncHanlder(async (req, res) => {

    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    await goal.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals, setGoals, updateGoal, deleteGoal
}