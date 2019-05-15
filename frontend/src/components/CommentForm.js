import React, { Component } from 'react'
import { guidGenerator } from '../utils/Util'

class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            body: '',
            author: ''
        }
    }
    
    componentDidMount() {
        const { comment } = this.props
        const { body, author } = comment;
        
        this.setState({
            body,
            author
        })
    }

    handleChange(event, name) {
        this.setState({
            [name]: event.target.value
        });
    };

    canSubmit() {
        const { body, author } = this.state
        return body !== '' && author !== ''
    }

    handleSubmit = event => {
        event.preventDefault();
        const { author, body } = this.state
        const { submitComment, comment, post } = this.props
        const isNewComment =  comment.id === ''
        submitComment({
            id: isNewComment ? guidGenerator() : comment.id,
            body,
            author,
            parentId: post.id,
            timestamp: new Date().getTime(),
            voteScore: isNewComment ? 0 : comment.voteScore
        })
    }

    render() {
        const { comment, deactvateEdtion } = this.props
        const isNewComment =  comment.id === ''

        return (
            <div className="comment-form">
                {isNewComment && (
                    <h3>Adicionar Comentário</h3>
                )}
                {!isNewComment && (
                    <h3>Editar Comentário</h3>
                )}
                <form onSubmit={event => this.handleSubmit(event)}>
                    <span className="title">Conteúdo:</span>
                    <textarea
                        className="textarea"
                        id="body"
                        value={this.state.body || ''}
                        maxLength={500}
                        onChange={e => this.handleChange(e, "body")}
                        />
            
                    <span className="title">Autor:</span>
                    <input
                        className="input"
                        type="text"
                        id="author"
                        value={this.state.author || ''}
                        onChange={e => this.handleChange(e, "author")}
                        />
                    <div className="actions">
                        <button 
                            className="btn" 
                            type="submit" 
                            disabled={!this.canSubmit()}
                            >
                            <span>Postar</span>
                        </button>
                        {!isNewComment && (
                            <button 
                                className="btn"
                                onClick={deactvateEdtion}
                                >
                                <span>Cancelar</span>
                            </button>
                        )}
                    </div>
                </form>
            </div>
        )
    }
}

CommentForm.defaultProps = {
    comment: {
      id: '',
      body: '',
      author: ''
    }
  }

export default CommentForm