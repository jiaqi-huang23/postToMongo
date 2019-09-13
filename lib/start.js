"use strict";

var _schema = require("./schema");

var _schema2 = _interopRequireDefault(_schema);

var _loadPost = require("./loadPost");

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mongoose = require('mongoose');

_dotenv2.default.config(); // Initialize connection to database


const dbUrl = `mongodb+srv://jiaqi:xiaotiao88@cluster0-apmyr.gcp.mongodb.net/test?retryWrites=true&w=majority`;
const dbOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}; // Set DB from mongoose connection

mongoose.connect(dbUrl, dbOptions);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error#:'));
/*
An instance of a model is called a document.
Models are responsible for creating and reading documents from the underlying MongoDB database.
*/

const Post = mongoose.model('Post', _schema2.default); //create document if not exist
//load and post

async function loadNewPost() {
  const post = await (0, _loadPost.loadPost)('My Buggy JS code recorder', process.env.POST_PATH);
  console.log(post);
  return post;
}

db.once('open', async () => {
  console.log('connected');
  /*
  * find the the document with id equal to filename
  * if exists, upate document
  * if note exist, rename file to id, and save the new document in mongo
  */

  const postObj = await loadNewPost();
  const post = new Post(postObj);
  post.save(err => {
    if (err) throw err;
    console.log('new post saved');
  });
  Post.deleteOne({
    id: "54010ef8c637ebc68077568ca64e7b7f"
  }), err => {
    if (err) return handleError(err); // deleted at most one tank document}}

    console.log('deleted');
  };
});

module.exports = () => db;