import React, { Component } from 'react'

class VoteScore extends Component {

    render() {
        const { like, dislike } = this.props

        return (
            <div>
                <button 
                    className="button" 
                    type="button" 
                    onClick={like}
                    >          
                    Like
                </button>
                <button 
                    type="button" 
                    onClick={dislike}
                    >          
                    Dislike
                </button>
            </div>
        )
    }
}

export default VoteScore