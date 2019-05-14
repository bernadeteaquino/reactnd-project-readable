import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetPostById } from '../actions/posts'
import { handleGetCommentsByPostId, handleAddComment } from '../actions/comments'
import Post from './Post'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import { getCommentsOrderVoteScore } from '../utils/Util'

class PostDetail extends Component {

    componentDidMount() {
        const { postId } = this.props.match.params
        this.props.dispatch(handleGetPostById(postId))
        this.props.dispatch(handleGetCommentsByPostId(postId))
    }

    addComment = comment => {
        const { postId } = this.props.match.params
        this.props.dispatch(handleAddComment(comment))
        this.props.dispatch(handleGetCommentsByPostId(postId))
    }

    render() {
        const { post, comments } = this.props

        return (
            <div>POST detail 
                <Post key={post.id} post={post} />
                <CommentForm post={post} submitComment={this.addComment}/>
                <CommentList comments={comments} />
            </div>
        )
    }
}

function mapStateToProps({ posts, comments }, {match}) {
    return posts.isLoading === true || comments.isLoading === true
        ? {
            post: posts,
            comments: comments
        }
        : {
            post: posts.data.filter(post => post.id === match.params.postId)[0],
            comments: comments.data.length > 0 
                ? getCommentsOrderVoteScore(comments.data)
                : comments.data
        }
}

export default connect(mapStateToProps)(PostDetail)