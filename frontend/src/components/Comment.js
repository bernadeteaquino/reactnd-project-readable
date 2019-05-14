import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentForm from './CommentForm'
import { handleEditComment, handleDeleteComment, handleVoteOnComment } from '../actions/comments'
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
        this.props.dispatch(handleDeleteComment(this.props.comment.id))
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
        const { comment } = this.props
        const { isEditing } = this.state
        const { id, author, body, timestamp, voteScore } = comment

        return (
            <div>
                <li key={id}>
                    {isEditing && ( <CommentForm comment={comment} submitComment={this.editComment}/>)}
                    {!isEditing && (
                        <div className="actions">
                            <button
                                type="button" 
                                onClick={this.deleteComment}>
                                Apagar
                            </button>
                            <button
                                type="button" 
                                onClick={this.actvateEdtion}>
                                Editar
                            </button>
                        </div>
                    )}
                    <div>{id} - {author} - {body} - {timestamp} - {voteScore} - {timestamp}</div>
                    <VoteScore like={this.like} dislike={this.dislike} />
                </li>
            </div>
        )
    }
}

export default connect()(Comment)