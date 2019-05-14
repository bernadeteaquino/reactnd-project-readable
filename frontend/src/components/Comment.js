import React, { Component } from 'react'

class Comment extends Component {
    render() {
        const { comment } = this.props
        const { id, author, body, timestamp, voteScore } = comment

        return (
            <li key={id}>
                {id} - {author} - {body} - {timestamp} - {voteScore} - {timestamp}
            </li>
        )
    }
}

export default Comment