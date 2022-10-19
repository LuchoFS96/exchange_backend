const server = require("./src/server.js");
const sequelize = require("./src/database.js");
const Crypto = require("./src/models/Crypto.js");

sequelize.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log("Listening on port 3001");
  });
});
