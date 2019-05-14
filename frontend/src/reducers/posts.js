import { GET_POSTS, GET_POST_BY_ID, ADD_POST, EDIT_POST, DELETE_POST } from '../utils/constants'

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
        case ADD_POST: {
                const { post } = action
                const posts = state.data
                posts.push(post)
                return {
                    ...state,
                    data: posts
                }
            }
        case EDIT_POST: {
            const { post } = action
            const postEdited = state.data.map(item => {
                if (item.id === post.id) {
                    return { ...item, ...post}
                }
                return item
            })
            return {
                ...state,
                data: postEdited
            }
        }
        case DELETE_POST: {
            const { post } = action
            const posts = state.data
            const newPosts = posts.filter(item => 
                item.id !== post.id && post.deleted)
            return {
                ...state,
                data: newPosts
            }
        }
        default:
            return state
    }
}

export default posts