import * as API from '../utils/API'
import getCategories from './categories'

export function handleInitialData() {
    return (dispatch) => {
        return API.getInitialData()
            .then(({ categories }) => {
                dispatch(getCategories(categories))
            })
    }
}