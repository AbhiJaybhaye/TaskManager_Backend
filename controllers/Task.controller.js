const { TaskService } = require("../services");
const TaskServiceInstance = new TaskService();

const getTasks = async (req, res) => {
    try {
        const tasks = await TaskServiceInstance.find();
        
        if(tasks.length === 0) {
            return res.status(404).json({
                success: false,
                message: "There are no Tasks",
                data: tasks
            });
        }
        res.status(200).json({
            success: true,
            message: "Tasks fetched successfully",
            data: tasks
        });
    } catch (err) {

        res.status(500).json({ 
            success: false,
            message: "Error fetching tasks",
            error: err.message
         });
    }
};

const createTask = async (req, res) => {
    try {
        const { title, description, deadline } = req.body;
        const newTask = await TaskServiceInstance.create({
            title,
            description,
            deadline
        });

        res.status(201).json({
            success: true,
            message: "Task created successfully",
            data: newTask,
        });
    } catch (err) {

        res.status(500).json({
            success: false,
            message: "Error creating task",
            error: err.message
        });
    }
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await TaskServiceInstance.update(id, req.body);

        res.status(200).json({
            success: true,
            message: "Task updated successfully",
            data: result
        });
    } catch (err) {

        res.status(500).json({
            success: false,
            message: "Error updating task",
            error: err.message
        });
    }
};

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await TaskServiceInstance.delete(id);

        res.status(204).json({
            success: true,
            message: "Task deleted successfully",
            data: result
        });
    } catch (err) {

        res.status(500).json({
            success: false,
            message: "Error deleting task",
            error: err.message
        });
    }
};

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
};