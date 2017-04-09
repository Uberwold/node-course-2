//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongo')
  }
  console.log('Connected to mongoDB server');

  //  db.collection('Todos').insertOne({
  //    text: 'Something to do',
  //    completed: 'false'
  //  }, (err, result) => {
  //
  //    if (err) {
  //      return console.log('Unable to insert todo', err);
  //    }
  //
  //    console.log(JSON.stringify(result.ops, undefined, 2));
  //
  //  });

  //insert new doc into the users collection(name: john, age: 30, locationString)

//  db.collection('Users').insertOne({
//    name: 'John',
//    age: 30,
//    location: 'London'
//  }, (err, result) => {
//    if (err) {
//      return console.log('Unable to insert user', err);
//    }
//
//    console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
//  });

  db.close();

});