import PostSchema from './schema'
import { loadPost } from './loadPost'
import dotenv from 'dotenv'

const mongoose = require('mongoose');

dotenv.config();


// Initialize connection to database
const dbUrl = process.env.MONGO_CONNECT_STRING;
const dbOptions = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      };

// Set DB from mongoose connection
mongoose.connect(dbUrl, dbOptions);

const db = mongoose.connection;
db.on('error', console.error.bind(console,
    'MongoDB connection error#:'));


/*
An instance of a model is called a document.
Models are responsible for creating and reading documents from the underlying MongoDB database.
*/
const Post = mongoose.model('Post', PostSchema);
//create document if not exist

//load and post
async function loadNewPost() {
    const post = await loadPost('My Buggy JS code recorder', process.env.POST_PATH);
    console.log(post);
    return post;
}

db.once('open', async () => {
    console.log('connected');


    /** @todo
    * find the the document with id equal to filename
    * if exists, upate document
    * if note exist, rename file to id, and save the new document in mongo
    */
    const postObj = await loadNewPost();
    const post = new Post(postObj);
    post.save((err) => {
        if(err) throw err;
        console.log('new post saved');
    })


})

module.exports = () => db;
