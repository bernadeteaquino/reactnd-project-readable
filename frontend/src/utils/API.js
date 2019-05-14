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

export const fetchPost = (id) => {
    return fetch(`${url}/posts/${id}`, { headers })
        .then(res => res.json())
}

export const fetchPostComments = (postId) => {
    return fetch(`${url}/posts/${postId}/comments`, { headers })
        .then(res => res.json())
}

export const addPost = (post) => {
    return fetch(`${url}/posts`, {
        method: 'POST',
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    }).then(res => res.json())
}

export const editPost = (post) => {
    return fetch(`${url}/posts/${post.id}`, {
        method: 'PUT',
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    }).then(res => res.json())
}