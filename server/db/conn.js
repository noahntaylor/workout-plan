const url = process.env.APP_ATLAS_URL;
const { MongoClient } = require("mongodb");
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (error, db) {
      if (db) {
        _db = db.db("workouts");
        console.log("Connected to MongoDB!");
      }

      return callback(error);
    });
  },

  getData: function () {
    return _db;
  },
};
