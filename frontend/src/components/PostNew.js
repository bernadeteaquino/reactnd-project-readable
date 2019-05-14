import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PostForm from './PostForm'
import { handleAddPost } from '../actions/posts'


class PostNew extends Component {
    state = {
        finished: false
    }

    createPost = post => {
        this.props.dispatch(handleAddPost(post))
        this.redirect()
    }

    redirect() {
        this.setState({ finished: true })
    }

    render() {
        const { finished } = this.state
        const { categories, defaultCategory } = this.props

        if (finished) 
            return <Redirect to="/" />

        if (categories.isLoading) return <div/>

        return (
            <PostForm 
                categories={categories}
                defaultCategory={defaultCategory}
                submitPost={this.createPost}/>
        )
    }
}

function mapStateToProps({ categories }, { match }) {
    return (categories.isLoading)
    ? {
        categories: categories
    }
    : {
        categories: 
            (match.params.category) 
            ? categories.data.filter(
                category => category.name === match.params.category
            )
            : categories.data,
        defaultCategory: match.params.category ? match.params.category : 'react' 
    };
}

export default connect(mapStateToProps)(PostNew)