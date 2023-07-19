

const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get goals' })

}
const setGoals = (req, res) => {
    res.status(200).json({ message: 'Set goals ' })
}
const updateGoals = (req, res) => {
    res.status(200).json({ message: `update Goal ${req.params.id}` })
}
const deleteGoals = (req, res) => {
    res.status(200).json({ message: `delete goals ${req.params.id}` })
}



module.exports = {
    getGoals, setGoals, updateGoals, deleteGoals
}