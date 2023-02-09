//* Function import
const postsControllers = require('./posts.controllers');

//* GET all posts
const getAllPosts = ( req, res ) => {
    postsControllers.findAllPosts()
        .then( data => {
            res.status( 200 ).json( data );
        } )
        .catch( error => {
            res.status( 400 ).json( error );
        } );
};

//* GET post by ID
const getPostByID = ( req, res ) => {
    const id = Number(req.params.id);

    postsControllers.findPostById( id )
        .then( data => {
            if( data ){
                res.status( 200 ).json( data );
            } else {
                res.status( 404 ).json({
                    message: 'Post not found.'
                });
            };
        })
        .catch( error => {
            res.status( 400 ).json( error );
        });
};

//* POST new post
const postNewPost = ( req, res ) => {
    const postObj = req.body;

    postsControllers.createPost( postObj )
        .then( data => {
            res.status( 201 ).json( data );
        })
        .catch( error => {
            res.status( 400 ).json( error );
        });
};

//* UPDATE post -> PATCH
const patchPost = ( req, res ) => {
    const id = Number(req.params.id);
    const postObj = req.body;
    postsControllers.updatePost( id, postObj )
        .then( data => {
            if( data ){
                res.status( 200 ).json({ message: `Post with id: ${ id } updated successfully.` });
            } else {
                res.status( 404 ).json({
                        message: 'Post not found.'
                });
            };
        })
        .catch( error => {
            res.status( 400 ).json( error );
        });
};

//* DELETE product
const deletePost = ( req, res ) => {
    const id = Number(req.params.id);
    postsControllers.deletePost( id )
        .then( data => {
            if( data ){
                res.status( 204 ).json();
            } else {
                res.status( 404 ).json({
                        message: 'Post not found.'
                });
            }
        } )
        .catch( error => {
            res.status( 400 ).json( error );
        } );
};

//* Exports
module.exports = {
    getAllPosts,
    getPostByID,
    postNewPost,
    patchPost,
    deletePost
};