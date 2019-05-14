import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PostList from './PostList'

class Dashboard extends Component {
    render() {
        const { categories, posts } = this.props

        if (categories.isLoading === true || posts.isLoading === true ) 
            return <div/>;

        return (
            <div>
                <h3>Categorias:</h3>
                <ul>
                    {categories.data.map((category) => (
                        <li key={category.name} >
                            <div>
                                <Link className="button is-info" to={`/categories/${category.name}`}>
                                    {category.name}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
                <h3>Posts:</h3>
                <Link 
                    to="/posts/new"
                    >Adicionar Postagem</Link>
                <div>
                    <PostList posts={posts.data} />
                </div>
            </div>
        )        
    }
}

function mapStateToProps ({ categories, posts }) {

    return {
        categories: categories,
        posts: posts
    }
  }

export default connect(mapStateToProps)(Dashboard)