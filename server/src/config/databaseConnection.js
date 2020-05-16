const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

let mongoDB;

const setupDB = callback => {
  const uri = `mongodb+srv://${process.env.A}:${process.env.B}@cluster0-jkfzl.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true` 
  

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
