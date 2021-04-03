// const poolData = require("pg").Pool;
// // const newPool = new poolData({
// //   user: "hamid68",
// //   host: "localhost",
// //   database: "hamid1database",
// //   password: "newHamid",
// //   port: "8080"
// // });

const env = {
  database: "hamid1database",
  username: "hamid68",
  password: "newHamid",
  host: "localhost",
  dialect: "postgres",
  port: 8080,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;
