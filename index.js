
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
// const {
//   SERVER_PORT
// } = process.env;

const PORT = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(PORT , () => {
    console.log(`Listening at ${PORT}`) // eslint-disable-line no-console
  });
} );
