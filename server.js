const mongoose = require("mongoose");

const app = require("./app");

require("dotenv").config();
mongoose.set("strictQuery", false);

const { HOST_URL, PORT } = process.env;

mongoose
  .connect(HOST_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server running. Use our API on port: 3000");
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
