const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdRemove

// Todo.findOneAndRemove({id:'59477598ab51f4d1f8fa1bbc'}).then((result) => {
//
// });

Todo.findByIdAndRemove('59477598ab51f4d1f8fa1bbc').then((result) => {
  console.log(result);
});
