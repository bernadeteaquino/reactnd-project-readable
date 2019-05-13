import React, { Component } from 'react'

class Post extends Component {

    render() {
        const { post } = this.props
        const { id, category, title, author, body, timestamp, commentCount, voteScore } = post

        return (
            <li key={id}>
                {id} - {category} - {title} - {author} - {body} - {timestamp} - {commentCount} - {voteScore}
            </li>
        )
    }
}

export default Post