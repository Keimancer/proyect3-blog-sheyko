//* Imports
const postsServices = require( './posts.services' );
const router = require('express').Router();

//* GET all products route
router.get( '/posts', postsServices.getAllPosts );

//* POST new product route
router.post( '/posts', postsServices.postNewPost );

//* GET product by ID route
router.get( '/posts/:id', postsServices.getPostByID );

//TODO: UPDATE product route -> PATCH
router.patch( '/posts/:id', postsServices.patchPost );

//TODO: DELETE product route
router.delete( '/posts/:id', postsServices.deletePost );

//* Exports
module.exports = router;