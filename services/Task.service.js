const { Task } = require("../models");

class TaskService {

    find = async () => {
        const tasks = await Task.find({}).sort({ createdAt: -1 });
        return tasks;
    };

    create = async (body) => {
        const task = new Task(body);
        const savedTask = await task.save();
        return savedTask;
    };

    update = async (id, body) => {
        const updatedTask = await Task.findByIdAndUpdate(id, body, { new: true});
        return updatedTask;
    };

    delete = async (id) => {
        const deletedTask = await Task.findByIdAndDelete(id);
        return deletedTask;
    };

    markAsDone = async (id) => {
        const updatedTask = await Task.findByIdAndUpdate(id, { status: "DONE" }, { new: true });
        return updatedTask;
    };
}

module.exports = TaskService;