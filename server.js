const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 5001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: 'thisismysecret',
  cookie: {},
  resave: false,
  saveUninitialize: true,
  store : new SequelizeStore({
    db: sequelize
  })
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));

// turn on routes
app.use(routes);

// turn on connection to db and server
//Drop table if exists
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
}).catch(err => {
    console.log(err);
    res.status(503);
});