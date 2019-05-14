import { GET_COMMENTS_BY_POST_ID } from '../utils/constants'
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