const SequelizeSlugify = require('sequelize-slugify');
const { DataTypes } = require('sequelize');

const { userTypes } = require('../../constants/roles');
const database = require('../../database');

const User = database.define(
  'users',
  {
    id: {
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true
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
    roles: {
      type: DataTypes.ARRAY(DataTypes.ENUM(Object.keys(userTypes))),
      defaultValue: [userTypes.STUDENT],
      allowNull: false,
    },
    token: /* one-time-use */ DataTypes.STRING,
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
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
);

SequelizeSlugify.slugifyModel(User, {
  source: ['firstname', 'lastname']
});

module.exports = User;
