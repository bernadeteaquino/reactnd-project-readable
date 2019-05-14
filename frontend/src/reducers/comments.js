import { GET_COMMENTS_BY_POST_ID } from '../utils/constants'

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
        default:
            return state
    }
}

export default categories