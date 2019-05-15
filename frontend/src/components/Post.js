import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import VoteScore from './VoteScore'
import { handleVoteOnPost, handleDeletePost } from '../actions/posts'
import { UP_VOTE, DOWN_VOTE } from '../utils/constants'
import { formatDate } from '../utils/Util'

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
            <div className="post">
                <Link className="btn" to={`/posts/edit/${id}`}>
                    Editar
                </Link>
                <button 
                    className="btn" 
                    type="button" 
                    onClick={this.deletePost}
                    >
                    Apagar
                </button>
                <div className="post-info">
                    <div className="title">{title}</div>
                    <div>{formatDate(timestamp)} | {author} | {category}</div>
                    <p>{body}</p>
                    <div className="amount"> {commentCount} Comentário(s) | {voteScore} Voto(s)</div>
                </div>
                <VoteScore like={this.like} dislike={this.dislike} />
            </div>
        )
    }
}

export default connect()(Post)