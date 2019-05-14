import { GET_POSTS, GET_POST_BY_ID } from '../utils/constants'

const initialState = {
    data: [],
    isLoading: true,
}

const posts = (state = initialState, action) => {
    switch(action.type) {
        case GET_POST_BY_ID:
            return {
                ...state, 
                isLoading: false,
                data: [action.post]
            }
        case GET_POSTS:
            return {
                ...state,
                isLoading: false,
                data: action.posts
            }
        default:
            return state
    }
}

export default posts