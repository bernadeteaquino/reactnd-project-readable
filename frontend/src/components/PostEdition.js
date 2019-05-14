import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PostForm from './PostForm'
import { handleGetPostById, handleUpdatePost } from '../actions/posts'

class PostEdition extends Component {

    state = {
        finished: false
    }

    componentDidMount() {
        const { postId } = this.props.match.params
        this.props.dispatch(handleGetPostById(postId))
    }

    updatePost = post => {
        this.props.dispatch(handleUpdatePost(post))
        this.redirect()
    }

    redirect() {
        this.setState({ finished: true })
    }

    render() {
        const { finished } = this.state
        const { post, categories } = this.props

        if (finished) 
            return <Redirect to="/" />

        if (post.isLoading || categories.isLoading) return <div/>

        return (
            <PostForm 
                post={post} 
                categories={categories}
                submitPost={this.updatePost}/>
        )
    }
}

function mapStateToProps({ posts, categories }, { match }) {
    return (posts.isLoading || categories.isLoading)
    ? {
        post: posts,
        categories: categories
    }
    : {
        post: posts.data.filter(post => post.id === match.params.postId)[0],
        categories: categories.data
    };
}

export default connect(mapStateToProps)(PostEdition)