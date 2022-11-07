const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Post extends Model {};

Post.init(
    {
        title: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
    }
);

module.exports = Post;
