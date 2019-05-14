import { GET_POSTS, GET_POST_BY_ID, EDIT_POST, ADD_POST, DELETE_POST } from '../utils/constants'
import * as API from '../utils/API'

export default function getPosts(posts) {
    return {
        type: GET_POSTS,
        posts: posts
    }
}

function getPostById(post) {
    return {
        type: GET_POST_BY_ID,
        post: post
    }
}

export function handleGetPostById(postId) {
    return (dispatch) => {
        return API.fetchPost(postId)
            .then((post) => dispatch(getPostById(post)))
    }
}

function editPost(post) {
    return {
        type: EDIT_POST,
        post: post
    }
}

export function handleUpdatePost(post) {
    console.log("post")
    console.log(post)
    return (dispatch) => {
        return API.editPost(post)
            .then(payload => dispatch(editPost(payload)));
    }
}

function addPost(post) {
    return {
        type: ADD_POST,
        post: post
    }
}

export function handleAddPost(post) {
    return (dispatch) => {
        return API.addPost(post)
            .then(payload => dispatch(addPost(payload)));
    }
}

export function handleVoteOnPost(postId, option) {
    return (dispatch) => {
        return API.voteOnPost(postId, option)
          .then((post) => dispatch(editPost(post)))
    }
}

function deletePost(post) {
    return {
        type: DELETE_POST,
        post
    }
}

export function handleDeletePost(postId) {
    return (dispatch) => {
        return API.deletePost(postId)
          .then((post) => dispatch(deletePost(post)))
    }
}