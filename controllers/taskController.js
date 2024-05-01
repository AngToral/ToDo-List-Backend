const { taskModel } = require("../models/task.model");

const getTasks = async (req, res) => {
    const data = await taskModel.find();
    res.status(200).json(data)
}

const getTaskId = async (req, res) => {
    try {
        const data = await taskModel.findById(req.params.id);
        if(data) {return res.status(200).json(data)}
        else return res.status(404).json({msg: "Task not found"})
    } catch (error) {
        return res.status(403).json({msg: "Forbidden"})
    }
}

const updateTask = async (req, res) => { 
    try {
        const data = await taskModel.findByIdAndUpdate(req.params.id, {...req.body})
        if (data) {return res.status(200).json({msg: "Task updated"})}
        else return res.status(404).json({msg: "Task not found"})
        
    } catch (error) {
        res.status(400).json({msg: "You missed some parameter", error: error.message})
    }
}

const addTask = async (req, res) => {
    try {
        const taskDb = await taskModel.create({status: "Pendiente", ...req.body})
        res.status(201).json({msg: "Task created", id: taskDb._id})
    } catch (error) {
        res.status(400).json({msg: "You missed some parameter", error: error.message})
    }
}

const deleteTask = async (req, res) => {
    try {
        const taskDeleted = await taskModel.findByIdAndDelete(req.params.id)
        if (taskDeleted) {return res.status(200).json({msg: "Task removed successfully", title: taskDeleted.title})}
        else return res.status(404).json({msg: "Task not found"})
        
    } catch (error) {
        res.status(403).json({msg: "Forbidden"})
    }
}

const markTaskOk = async (req, res) => { 
    try {
        const data = await taskModel.findByIdAndUpdate(req.params.id, {status: "¡Completada!"});
        if(data) {
            //data.status = "¡Completada!"
            res.status(200).json({msg: "Task marked as completed"})}
        else return res.status(404).json({msg: "Task not found"})
    } catch (error) {
        res.status(400).json({msg: "You missed some", error: error.message})
    }
}

// const markTaskProg = async (req, res) => { 
//     try {
//         const data = await taskModel.findByIdAndUpdate(req.params.id, {status: "En Proceso..."});
//         if(data) {
//             //data.status = "¡Completada!"
//             res.status(200).json({msg: "Task marked as in progress"})}
//         else return res.status(404).json({msg: "Task not found"})
//     } catch (error) {
//         res.status(400).json({msg: "You missed parameter 'id'"})
//     }
// }

// const markTaskPend = async (req, res) => { 
//     try {
//         const data = await taskModel.findByIdAndUpdate(req.params.id, {status: "Pendiente"});
//         if(data) {
//             //data.status = "¡Completada!"
//             res.status(200).json({msg: "Task marked as in pending"})}
//         else return res.status(404).json({msg: "Task not found"})
//     } catch (error) {
//         res.status(400).json({msg: "You missed parameter 'id'"})
//     }
// }

module.exports = {
    addTask, 
    getTasks, 
    deleteTask, 
    getTaskId, 
    updateTask, 
    markTaskOk, 
    // markTaskProg,
    // markTaskPend
};