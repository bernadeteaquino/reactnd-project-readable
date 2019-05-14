import React, { Component } from 'react'
import Post from './Post'
import OrderBy from './OrderBy'
import { getPostsOrderBy } from '../utils/Util'
import { BY_SCORE } from '../utils/constants'

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: BY_SCORE
        }
    }

    changeOrderBy = e => {
        this.setState({
            order: e.target.value
        })
    }
    
    render() {
        const { posts } = this.props
        const { order } = this.state
        const postsOrderBy = getPostsOrderBy(posts, order)
        
        return (
            <div>
                {posts.length > 0 && (
                    <OrderBy changeHandler={this.changeOrderBy} order={order} />
                )}

                <ul>
                    {posts.length > 0 ? postsOrderBy.map((post) => (
                      <Post key={post.id} post={post} />
                    )): null }
                </ul>
            </div>
        )
    }
}

export default PostList