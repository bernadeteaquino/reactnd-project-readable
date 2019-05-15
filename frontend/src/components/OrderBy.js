import React, { Component } from 'react'
import { BY_SCORE, BY_DATE } from '../utils/constants'

class OrderBy extends Component {

    render() {
        const { changeHandler, order } = this.props

        return (
            <div className="order-by">
                <div className="title">Ordenar por:</div>
                <div className="radio">
                    <input 
                        type="radio" 
                        value={BY_SCORE}
                        onChange={changeHandler}
                        checked={order === BY_SCORE}  />
                    <span>
                        Pontos
                    </span>
                </div>
                <div className="radio">
                    <input 
                        type="radio" 
                        value={BY_DATE}
                        onChange={changeHandler}
                        checked={order === BY_DATE}  />
                    <span>
                        Data
                    </span>
                </div>
            </div>
        )
    }
}

export default OrderBy