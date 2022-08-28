const sequelize = require('../config/connection');
const seedPizza = require('./pizzaData');
const seedWine = require('./wineData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPizza();

  await seedWine();

  process.exit(0);
};

seedAll();