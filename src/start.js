import PostSchema from './schema'
import { loadPost } from './loadPost'
import dotenv from 'dotenv'

const mongoose = require('mongoose');

dotenv.config();


// Initialize connection to database
const dbUrl = `mongodb+srv://jiaqi:xiaotiao88@cluster0-apmyr.gcp.mongodb.net/test?retryWrites=true&w=majority`;
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

db.once('open', () => {
    console.log('connected');
})

/*
An instance of a model is called a document. 
Models are responsible for creating and reading documents from the underlying MongoDB database.
*/
const model = mongoose.model('Post', PostSchema);
//create document if not exist

//post = (await loadPost('test post', process.env.POST_PATH));

module.exports = () => db;