var express = require('express');
var mongoClient = require('mongodb').MongoClient;
var debug = require('debug')('app:adminRoutes');
var adminRouter = express.Router();

var books= [
  {
    title: 'War',
    genre: 'Historical',
    author: 'Lev',
    read: false
  },
  {
    title: 'War',
    genre: 'Historical',
    author: 'Lev',
    read: false
  }
];

function router(nav){
  adminRouter.route('/')
    .get((req, res) => {
      var url = 'mongodb://localhost:27017';
      var dbName = 'libraryApp';

      (async function mongo(){
        let client;
        try {
          client = await MongoClient.connect(url);
          debug('Connected correctly to server');

          var db = client.db(dbName);
          
          var response = await db.collection('books').insertMany(books);
          res.json(response);
        } catch (err) {
          debug(err.stack);
        }
      }())
    });
  return adminRouter;
}

module.exports = router;
