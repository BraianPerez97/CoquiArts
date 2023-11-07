// Import required modules and packages
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Create an Express application
const app = express();

// Set the port to the environment variable PORT or 5001 if not defined
const PORT = process.env.PORT || 5001;

// Define and import models
const models = {
  User: require('./models/User'), // Pass your Sequelize instance
  Category: require('./models/Category'), // Pass your Sequelize instance
};

// Set up middleware to parse JSON and URL-encoded data

const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure session settings
const sess = {
  secret: 'thisismysecret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Set up sessions using the configured settings
app.use(session(sess));

// Set up routes and pass the models object to your routes
app.use(routes);

// Set up connection to the database and start the server
sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
  })
  .catch(err => {
    console.error('Error syncing the database and starting the server:', err);
    process.exit(1);
  });
