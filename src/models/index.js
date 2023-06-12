"use strict";

require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const foodModel = require("../routes/food");
const clothesModel = require("../routes/clothes");
const POSTGRES_URI = process.env.NODE_ENV === "test" ? "sqlite:memory:" : process.env.DATABASE_URL;

let sequelizeOptions =
  process.env.NODE_ENV === "production"
    ? {
        dialect: "postgres",
        protocol: "postgres",
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
          native: true,
        },
      }
    : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

const foodTable = foodModel(sequelize, DataTypes);
const clothesTable = clothesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  Food: foodTable,
  Clothes: clothesTable,
};
