import React, { Component } from 'react'

class VoteScore extends Component {

    render() {
        const { like, dislike } = this.props

        return (
            <div className="vote-score">
                <button 
                    className="btn" 
                    type="button" 
                    onClick={like}
                    >
                    Like
                </button>
                <button
                    className="btn" 
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