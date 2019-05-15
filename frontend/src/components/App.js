
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route  } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import PostDetail from './PostDetail'
import PostEdition from './PostEdition'
import PostNew from './PostNew'
import PostListByCategory from './PostListByCategory'
import NotFoundError from './NotFoundError'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/posts/edit/:postId" component={PostEdition} />
              <Route exact path="/posts/edit/:postId" component={PostEdition} />
              <Route exact path="/posts/new" component={PostNew} />
              <Route exact path="/categories/:category/posts/new" component={PostNew} />
              <Route exact path="/:category/:postId" component={PostDetail} />
              <Route exact path="/error" component={NotFoundError} />
              <Route exact path="/:category" component={PostListByCategory} />
          </Switch>
          )
    }
}

export default connect()(App)