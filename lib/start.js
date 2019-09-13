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
db.once('open', () => {
  console.log('connected');
});
/*
An instance of a model is called a document. 
Models are responsible for creating and reading documents from the underlying MongoDB database.
*/

const model = mongoose.model('Post', _schema2.default); //create document if not exist

let post;

const getPost = async post => {
  post = await (0, _loadPost.loadPost)('test post', process.env.POST_PATH);
  return post;
};

getPost(post).then(console.log(post));
console.log(post);

module.exports = () => db;