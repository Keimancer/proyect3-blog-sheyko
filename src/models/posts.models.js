//* Imports
const { DataTypes } = require( 'sequelize' );
const db = require( '../utils/database' );

//* Models
const Posts = db.define( 'posts', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isPublished: {
        type: DataTypes.BOOLEAN,
        defaultValue: true       
    }
});

module.exports = Posts;