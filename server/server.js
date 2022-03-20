const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/workouts"));

// Get database connection
const db = require("./db/conn");

// Connect to database when server starts
app.listen(port, () => {
  db.connectToServer(function (error) {
    if (error) {
      console.log(error);
    }
  });

  console.log(`Server is running on port ${port}!`);
});
