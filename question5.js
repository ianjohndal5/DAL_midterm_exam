const express = require("express");
const sequelize = require("./db");
const User = require("./users");
const Task = require("./task");

const app = express();
const PORT = 2000;

app.use(express.json());

app.get("/users", async (req, res) => {
    try {
        const users = await User.findAll(); // get all users
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
    try {
        await sequelize.sync();
        console.log("Database synced successfully.");
    } catch (err) {
        console.error("Error syncing database:", err);
    }
});
