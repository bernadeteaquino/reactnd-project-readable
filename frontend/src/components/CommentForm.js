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
            parentId: isNewComment? post.id : comment.parentId,
            timestamp: new Date().getTime(),
            voteScore: isNewComment ? 0 : comment.voteScore
        })
    }

    render() {
        return (
            <div>
                <h3>Formulário para postagem</h3>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div className="field">
                        <textarea
                            className="textarea"
                            id="body"
                            value={this.state.body || ''}
                            maxLength={500}
                            onChange={e => this.handleChange(e, "body")}              
                            placeholder="Conteúdo da Comentário..."
                            />
                    </div>
                    <div className="field">
                        <div className="control has-icons-left">
                            <input
                                className="input"
                                type="text"            
                                id="author"
                                value={this.state.author || ''}              
                                onChange={e => this.handleChange(e, "author")}
                                placeholder="Autor..."
                                />
                        </div>
                    </div>
                    <div>
                        <button 
                            className="button is-success" 
                            type="submit" 
                            disabled={!this.canSubmit()}
                            >
                            <span>Postar</span>
                        </button>
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