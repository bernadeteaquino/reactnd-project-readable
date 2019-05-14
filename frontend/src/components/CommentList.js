import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    render() {
        const { comments, post } = this.props
        
        return (
            <ul>
                {comments.length > 0 ? comments.map((comment) =>  
                    <Comment key={comment.id} comment={comment} post={post}/>
                ): null }
            </ul>
        )
    }
}

export default CommentList