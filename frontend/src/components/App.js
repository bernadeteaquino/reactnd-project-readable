
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route  } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import PostDetail from './PostDetail'
import PostEdition from './PostEdition'
import PostNew from './PostNew'
import PostListByCategory from './PostListByCategory'

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
              <Route exact path="/categories/:category" component={PostListByCategory} />
              <Route exact path="/posts/:postId" component={PostDetail} />
          </Switch>
          )
    }
}

export default connect()(App)