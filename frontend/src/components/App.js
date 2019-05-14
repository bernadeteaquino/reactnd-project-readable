
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route  } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import PostDetail from './PostDetail'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/posts/:postId" component={PostDetail} />
          </Switch>
          )
    }
}

export default connect()(App)