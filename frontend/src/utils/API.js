const url = "http://localhost:3001"

const headers = {
    'Accept': 'application/json',
    'Authorization': 'bernadete'
}

export const getInitialData = () => {
    return Promise.all([
        fetchCategories()
    ]).then(([categories]) => ({
        categories
    }))
}

export const fetchCategories = () => {
    return fetch(`${url}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)
}