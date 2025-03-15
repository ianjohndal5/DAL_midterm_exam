const { DataTypes } = require("sequelize");
const sequelize = require("./db");

// Define the User model
const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: "active"
    }
}, {
    tableName: "users",
    timestamps: false // Disable timestamps if not needed
});

module.exports = User;
