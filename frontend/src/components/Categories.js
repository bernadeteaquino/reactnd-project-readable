import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Categories extends Component {
    render() {
        const { categories } = this.props

        return (
            <div>
                <h3>Categorias Disponíveis:</h3>
                <div className="categories">
                    {categories.data.map((category) => (
                        <div key={category.name} >
                            <Link className="btn" to={`/${category.name}`}>
                                {category.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Categories