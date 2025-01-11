const mongoose = require("mongoose");
const config = require("./user.config");
const dbUrl = config.db.url;

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log("db isn't connected", err.message);
    process.exit(1);
  });
