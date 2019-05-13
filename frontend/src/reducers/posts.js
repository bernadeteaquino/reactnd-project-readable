import { GET_POSTS } from '../utils/constants'

const posts = (state = [], action) => {
  switch(action.type) {
    case GET_POSTS:
      return action.posts
    default:
      return state
  }
}

export default posts