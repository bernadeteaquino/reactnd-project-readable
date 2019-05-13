import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PostList from './PostList'

class Dashboard extends Component {
    render() {
        const { categories, posts } = this.props

        return (
            <div>
                <h3>Categorias:</h3>
                <ul>
                    {categories.map((category) => (
                        <li key={category.name} >
                            <div>{category.name}</div>
                        </li>
                    ))}
                </ul>
                <h3>Posts:</h3>
                <Link 
                    to="/"
                    className="close-search"
                    >TODO Adicionar Postagem</Link>
                <div>
                    <PostList posts={posts} />
                </div>
            </div>
        )        
    }
}

function mapStateToProps ({ categories, posts }) {
    return {
        categories,
        posts
    }
  }

export default connect(mapStateToProps)(Dashboard)