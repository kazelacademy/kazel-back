const { DataTypes } = require('sequelize');
const database = require('../../database');

const User = database.define(
  'User',
  {
    firstname: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: DataTypes.STRING /* one-time-use */,
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isLocked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    unlockAt: DataTypes.STRING,
    accessFailedCount: {
      type: DataTypes.NUMBER,
      defaultValue: 0,
    },
  },
);

module.exports = User;
