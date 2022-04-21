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

// Serve React app
const path = require("path");
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Connect to database when server starts
app.listen(port, () => {
  db.connectToServer(function (error) {
    if (error) {
      console.log(error);
    }
  });

  console.log(`Server is running on port ${port}!`);
});
