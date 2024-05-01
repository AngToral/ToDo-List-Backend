const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: mongoose.ObjectId,
    status: {
        type: String,
        default: "Pendiente",
        enum: ["Pendiente", "En Proceso...", "¡Completada!"]},
    title: {
        type: String,
        required: true},
    hash: {
        type: String,
        required: true},
    due: {
        type: String,
        required: true},
}, 
{timestamps: true}
)

const taskModel = mongoose.model('Task', taskSchema)

module.exports = {taskModel}