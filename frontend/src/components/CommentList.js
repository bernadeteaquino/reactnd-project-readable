import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    render() {
        const { comments, post } = this.props
        
        return (
            <div className="comment-list">
                {comments.length > 0 && (
                    <h3>Comentário(s):</h3>
                )}
                {comments.length > 0 ? comments.map((comment) =>  
                    <Comment key={comment.id} comment={comment} post={post}/>
                ): null }
            </div>
        )
    }
}

export default CommentList