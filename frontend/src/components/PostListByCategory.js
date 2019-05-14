import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PostList from './PostList'

class PostListByCategory extends Component {
    render() {
        const { posts, match } = this.props
        const { category } = match.params

        return (
            <div>
                <div>Posts da categoria: {category}</div>
                <Link className="button is-info" to={`/categories/${category}/posts/new`}>
                    Adicionar Post a categoria
                </Link>
                <PostList posts={posts} />
            </div>
        )
    }
}

const mapStateToProps = ({ posts }, ownProps) => ({
    posts: posts.data
      .filter(post => post.category === ownProps.match.params.category)
})

export default connect(mapStateToProps)(PostListByCategory)
