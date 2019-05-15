import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PostList from './PostList'
import Categories from './Categories'

class PostListByCategory extends Component {
    render() {
        const { posts, match, categories } = this.props
        const { category } = match.params

        return (
            <div>
                <Categories categories={categories}/>
                <h3 className="by-category">Postagens da categoria: <span>{category}</span></h3>
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

const mapStateToProps = ({ posts, categories }, ownProps) => ({
    categories: categories,
    posts: posts.data
      .filter(post => post.category === ownProps.match.params.category)
})

export default connect(mapStateToProps)(PostListByCategory)
