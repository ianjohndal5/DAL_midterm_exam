const Task = require("./tasks"); // Import the Task model

// Create a Task
app.post("/tasks", async (req, res) => {
    try {
        const { name, description } = req.body;
        const task = await Task.create({ name, description });
        res.status(201).json(task);
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Get All Tasks
app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Update a Task
app.put("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, status } = req.body;
        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }
        task.name = name || task.name;
        task.description = description || task.description;
        task.status = status || task.status;
        await task.save();
        res.json(task);
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Delete a Task
app.delete("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }
        await task.destroy();
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
