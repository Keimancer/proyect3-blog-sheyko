//* Dependencies
const express = require('express');
require('dotenv').config;

//* Initial configurations
const postsRouter = require('./posts/posts.router');
const db = require('./utils/database');
const app = express();
app.use( express.json() );

//* Authentication and syncing
db.authenticate()
    .then( () =>{
        console.log( 'Database authenticated successfully.' );
    } )
    .catch( err => {
        console.log( err );
    } );

db.sync()
    .then( () => {
        console.log( 'Database synced successfully.' );
    } )
    .catch( err => {
        console.log( err );
    } );

//* Root check
app.get( '/', ( req, res ) => {
    res.json({
        message: "Server OK!",
        password: process.env.MY_PASSWORD
    });
});

//* Route
app.use( '/api/v1', postsRouter );

//* Listen
app.listen( 9000, () => {
    console.log( "Server started on http://localhost:9000" );
});




module.exports = app
