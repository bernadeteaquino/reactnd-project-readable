import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import VoteScore from './VoteScore'
import { handleVoteOnPost, handleDeletePost } from '../actions/posts'
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

    deletePost = () => {
        const { dispatch, post } = this.props
        dispatch(handleDeletePost(post.id))
    }

    render() {
        const { post } = this.props
        const { id, category, title, author, body, timestamp, commentCount, voteScore } = post

        return (
            <div>
                <div>
                    <Link className="button is-info" to={`posts/edit/${id}`}>
                        Editar
                    </Link>
                    <button 
                        className="button is-danger is-outlined" 
                        type="button" 
                        onClick={this.deletePost}
                        >
                        Apagar
                    </button>
                </div>
                <li key={id}>
                    {id} - {category} - {title} - {author} - {body} - {timestamp} - {commentCount} - {voteScore}
                </li>
                <VoteScore like={this.like} dislike={this.dislike} />
            </div>
        )
    }
}

export default connect()(Post)