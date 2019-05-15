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
                <h3 className="by-category">Posts da categoria: <span>{category}</span></h3>
                <div className="actions">
                    <Link className="btn" to="/">
                        Voltar
                    </Link>
                    <Link className="btn" to={`/categories/${category}/posts/new`}>
                        Adicionar Post à categoria
                    </Link>
                </div>
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
