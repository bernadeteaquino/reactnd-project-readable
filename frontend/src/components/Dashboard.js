import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h3>Categorias:</h3>
                <ul>
                    {this.props.categories.map((category) => (
                        <li key={category.name} >
                            <div>{category.name}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )        
    }
}

function mapStateToProps ({ categories }) {
    return {
        categories: categories
    }
  }

export default connect(mapStateToProps)(Dashboard)