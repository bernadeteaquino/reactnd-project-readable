import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PostList from './PostList'
import Categories from './Categories'

class Dashboard extends Component {
    render() {
        const { categories, posts } = this.props

        if (categories.isLoading === true || posts.isLoading === true ) 
            return <div/>;

        return (
            <div>
                <Categories categories={categories}/>
                <div>
                    <h3>Lista de postagens:</h3>
                    <Link
                        className="btn"
                        to="/posts/new"
                        >Adicionar Postagem</Link>
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