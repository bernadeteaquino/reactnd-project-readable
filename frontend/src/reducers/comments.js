import { GET_COMMENTS_BY_POST_ID, ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from '../utils/constants'

const initialState = {
    data: [],
    isLoading: true,
}

const categories = (state = initialState, action) => {
    switch(action.type) {
        case GET_COMMENTS_BY_POST_ID:
            return {
                ...state,
                isLoading: false,
                data: action.comments
            }
        case ADD_COMMENT: {
            const comment = action.comment
            const comments = state.data
            comments[comments.length] = comment
            return {
                ...state,
                data: comments
            }
        }
        case EDIT_COMMENT: {
            const { comment } = action
            const commentEdited = state.data.map(item => {
                if (item.id === comment.id) {
                    return { ...item, ...comment}
                }
                return item
            })
            return {
                ...state,
                data: commentEdited
            }
        }
        case DELETE_COMMENT: {
            const { comment } = action
            const oldComments = state.data
            const newComments = oldComments.filter(item => 
                item.id !== comment.id && comment.deleted)
            return {
                ...state,
                data: newComments
            }
        }
        default:
            return state
    }
}

export default categories