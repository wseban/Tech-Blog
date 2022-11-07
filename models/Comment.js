const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Comment extends Model {};

Comment.init(
    {
        content: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
    }
);

module.exports = Comment;