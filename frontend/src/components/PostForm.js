import React, { Component } from 'react'
import { guidGenerator } from '../utils/Util'

class PostForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            category: '',
            title: '',
            body: '',
            author: ''
        }
    }
    
    componentDidMount() {
        const { post, defaultCategory } = this.props
        const { category, title, body, author } = post;

        this.setState({
            category: category ? category : defaultCategory,
            title,
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
        const { title, body, author } = this.state
        return title !== '' && body !== '' && author !== ''
    }

    handleSubmit = event => {
        event.preventDefault();
        const { category, title, author, body } = this.state
        const { submitPost, post } = this.props
        const isNewPost =  post.id === ''
        
        submitPost({
            id: isNewPost ? guidGenerator() : post.id,
            category,
            title,
            body,
            author,
            timestamp: new Date().getTime(),
            voteScore: isNewPost ? 0 : post.voteScore
        })
    }

    render() {
        const { categories } = this.props

        return (
            <div>
                <h3>Formulário para postagem</h3>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div className="field">
                        <select value={this.state.category || ''} onChange={e => this.handleChange(e, "category")}>
                            {categories.map((category) => (
                                <option key={category.name} value={category.name}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="field">
                        <input
                            className="input"
                            type="text"              
                            id="title"
                            value={this.state.title || ''}
                            onChange={e => this.handleChange(e, "title")}
                            placeholder="Título..."
                            />
                    </div>
                    <div className="field">
                        <textarea
                            className="textarea"
                            id="body"
                            value={this.state.body || ''}
                            maxLength={500}
                            onChange={e => this.handleChange(e, "body")}              
                            placeholder="Conteúdo da postagem..."
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

PostForm.defaultProps = {
    post: {
      id: '',
      category: '',
      title: '',
      body: '',
      author: '',
    }
  }

export default PostForm