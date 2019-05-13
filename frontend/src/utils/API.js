const url = "http://localhost:3001"

const headers = {
    'Accept': 'application/json',
    'Authorization': 'bernadete'
}

export const getInitialData = () => {
    return Promise.all([
        fetchCategories(),
        fetchPosts()
    ]).then(([categories, posts]) => ({
        categories,
        posts
    }))
}

export const fetchCategories = () => {
    return fetch(`${url}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)
}

export const fetchPosts = () => {
    return fetch(`${url}/posts`, { headers })
        .then(res => res.json())
}