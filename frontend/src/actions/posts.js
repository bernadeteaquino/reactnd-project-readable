import { GET_POSTS, GET_POST_BY_ID } from '../utils/constants'
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
  console.log("handleGetPostById")
  return (dispatch) => {
      return API.fetchPost(postId)
        .then((post) => dispatch(getPostById(post)))
  }
}