const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Tone extends Model {}


Tone.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    exercise_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    setLength: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    repLength: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    day_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 6,
        validate: {
            isNumeric: true
        }
    },
    plan_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'plan',
            key: 'id'
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tone',
  }
);

module.exports = Tone;