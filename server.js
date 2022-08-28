const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const allRoutes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
// the port that YOUR server listens on shouldn't be the same port as specified in config/connection.js where you set up the sequelize connection
const PORT = process.env.PORT || 4000;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(allRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port...'));
});