import { GET_COMMENTS_BY_POST_ID, ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from '../utils/constants'
import * as API from '../utils/API'

function getCommentsByPostId(comments) {
    return {
        type: GET_COMMENTS_BY_POST_ID,
        comments
    }
}
  
export function handleGetCommentsByPostId(postId) {
    return (dispatch) => {
        return API.fetchPostComments(postId)
            .then((comments) => dispatch(getCommentsByPostId(comments)))
    }
}

function addComment(comment) {
    return {
        type: ADD_COMMENT,
        comment
    }
}

export function handleAddComment(comment) {
    return (dispatch) => {
        return API.addComment(comment)
            .then((comment) => dispatch(addComment(comment)))
    }
}

function editComment(comment) {
    return {
        type: EDIT_COMMENT,
        comment
    }
}

export function handleEditComment(comment) {
    return (dispatch) => {
        return API.editComment(comment)
            .then((comment) => dispatch(editComment(comment)))
    }
}

function deleteComment(comment) {
    return {
        type: DELETE_COMMENT,
        comment
    }
}

export function handleDeleteComment(commentId) {
    return (dispatch) => {
        return API.deleteComment(commentId)
          .then((comment) => dispatch(deleteComment(comment)))
    }
}

export function handleVoteOnComment(commentId, option) {
    return (dispatch) => {
        return API.voteOnComment(commentId, option)
          .then((comment) => dispatch(editComment(comment)))
    }
}