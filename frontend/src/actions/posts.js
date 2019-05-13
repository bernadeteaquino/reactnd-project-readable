import { GET_POSTS } from '../utils/constants'

export default function getPosts(posts) {
  return {
      type: GET_POSTS,
      posts: posts
  }
}