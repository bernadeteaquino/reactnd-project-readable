import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentForm from './CommentForm'
import { handleEditComment, handleDeleteComment, handleVoteOnComment } from '../actions/comments'
import { handleUpdateCommentCounter } from '../actions/posts'
import { UP_VOTE, DOWN_VOTE } from '../utils/constants'
import VoteScore from './VoteScore'

class Comment extends Component {
    state = {
        isEditing: false
    }

    actvateEdtion = () => {
        this.setState({ isEditing: true });
    }

    editComment = comment => {
        this.props.dispatch(handleEditComment(comment))
        this.setState({ isEditing: false });
    }

    deleteComment = () => {
        const { dispatch, comment, post } = this.props
        post.commentCount -= 1
        dispatch(handleDeleteComment(comment.id))
        dispatch(handleUpdateCommentCounter(post))
    }

    like = () => {
        const { dispatch, comment } = this.props
        dispatch(handleVoteOnComment(comment.id, { option: UP_VOTE }))
    }

    dislike = () => {
        const { dispatch, comment } = this.props
        dispatch(handleVoteOnComment(comment.id, { option: DOWN_VOTE }))
    }

    render() {
        const { comment, post } = this.props
        const { isEditing } = this.state
        const { id, author, body, timestamp, voteScore } = comment

        return (
            <div key={id}>
                {isEditing && ( <CommentForm comment={comment} submitComment={this.editComment} post={post}/>)}
                {!isEditing && (
                    <div className="actions">
                        <button
                            type="button" 
                            className="btn"
                            onClick={this.deleteComment}>
                            Apagar
                        </button>
                        <button
                            type="button" 
                            className="btn"
                            onClick={this.actvateEdtion}>
                            Editar
                        </button>
                    </div>
                )}
                <div className="comment-info">
                    <div>{timestamp} | {author}</div>
                    <p>{body}</p>
                    <div className="amount"> {voteScore} Voto(s)</div>
                </div>
                <VoteScore like={this.like} dislike={this.dislike} />
                <div className="line"><hr/></div>
            </div>
        )
    }
}

export default connect()(Comment)