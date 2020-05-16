
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()
let mongoDB;

const setupDB = callback => {
  const uri = `mongodb+srv://${process.env.A}:${process.env.B}@cluster0-jkfzl.mongodb.net/test?retryWrites=true&w=majority`

  MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      mongoDB = client.db('full-stack-server');

      if (err) {
        return callback(err);
      } else {
        return callback('DB OK');
      }
    }
  );
};

const getDB = () => {
  return mongoDB;
};

module.exports = { setupDB, getDB };