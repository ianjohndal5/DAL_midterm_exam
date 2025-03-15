const { DataTypes } = require("sequelize");
const sequelize = require("./db"); // Import your Sequelize instance

// Define the Task model
const Task = sequelize.define("Task", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: "pending" // Default task status
    }
}, {
    tableName: "tasks",
    timestamps: false // Disable timestamps if not needed
});

module.exports = Task;
