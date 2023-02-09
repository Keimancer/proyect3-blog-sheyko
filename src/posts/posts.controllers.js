//* Imports
const Posts = require('../models/posts.models');

//* GET all posts
const findAllPosts = async() => {
    const data = await Posts.findAll();
    return data;
};

//* GET post by ID
const findPostById = async id => {
    const data = await Posts.findOne({
        where: {
            id: id
        }
    });
    return data;
};

//* POST new post
const createPost = async postObj => {
    const newPost = {
        content: postObj.content,
        userName: postObj.userName,
        isPublished: postObj.isPublished
    };
    const data = await Posts.create( newPost );
    return data;
}

//* UPDATE post
const updatePost = async ( id, postObj ) => {
    const data = await Posts.update( postObj, {
        where: {
            id: id
        }
    });
    return data;
};

//* DELETE post
const deletePost = async id => {
    const data = await Posts.destroy({
        where: {
            id: id
        }
    });
    return data;
};

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost
}
