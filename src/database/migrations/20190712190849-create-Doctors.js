'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Doctors', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      name: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },

      crm: {
        allowNull: false,
        type: DataTypes.STRING(13),
        unique: true,
      },

      specialty: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },

      email: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },

      password: {
        allowNull: false,
        type: DataTypes.STRING(20),
      },

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,

    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Doctors');
  }
};


