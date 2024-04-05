const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../dbConnection/dbconnection");

const Contact = sequelize.define(
  "Contact",
  {
    // Model attributes are defined here
    phoneNumber: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    linkedId: {
      type: DataTypes.INTEGER,
    },
    linkPrecedence: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    timeStamp: true,
    freezetableName:true,
  }
);

Contact.sync()

module.exports = {
  Contact,
  sequelize,
};

// `sequelize.define` also returns the model
console.log(Contact === sequelize.models.Contact); // true
