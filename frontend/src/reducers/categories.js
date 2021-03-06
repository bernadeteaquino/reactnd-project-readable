import { GET_CATEGORIES } from '../utils/constants'

const initialState = {
    data: [],
    isLoading: true,
}

const categories = (state = initialState, action) => {
    switch(action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                isLoading: false,
                data: action.categories
            }
        default:
            return state
    }
}

export default categories