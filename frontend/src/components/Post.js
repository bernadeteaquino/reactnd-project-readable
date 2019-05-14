import React, { Component } from 'react'
import { connect } from 'react-redux'
import VoteScore from './VoteScore'
import { handleVoteOnPost } from '../actions/posts'
import { UP_VOTE, DOWN_VOTE } from '../utils/constants'

class Post extends Component {

    like = () => {
        const { dispatch, post } = this.props
        dispatch(handleVoteOnPost(post.id, { option: UP_VOTE }))
    }

    dislike = () => {
        const { dispatch, post } = this.props
        dispatch(handleVoteOnPost(post.id, { option: DOWN_VOTE }))
    }

    render() {
        const { post } = this.props
        const { id, category, title, author, body, timestamp, commentCount, voteScore } = post

        return (
            <div>
                <li key={id}>
                    {id} - {category} - {title} - {author} - {body} - {timestamp} - {commentCount} - {voteScore}
                </li>
                <VoteScore like={this.like} dislike={this.dislike} />
            </div>
        )
    }
}

export default connect()(Post)