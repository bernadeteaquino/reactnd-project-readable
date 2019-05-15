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
            <div className="post-list">
                {posts.length > 0 && (
                    <OrderBy changeHandler={this.changeOrderBy} order={order} />
                )}

                <div>
                    {posts.length > 0 ? postsOrderBy.map((post) => (
                      <Post key={post.id} post={post} forList={true}/>
                    )): null }
                </div>
            </div>
        )
    }
}

export default PostList