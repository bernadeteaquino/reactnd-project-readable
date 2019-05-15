import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
        const { categories, post } = this.props
        const isNewPost =  post.id === ''

        return (
            <div className="post-form">
                <h3>
                    {isNewPost && (
                        <h3>Adicionar Postagem</h3>
                    )}
                    {!isNewPost && (
                        <h3>Editar Postagem</h3>
                    )}
                </h3>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <span className="title">Categoria:</span>
                    <select value={this.state.category || ''} onChange={e => this.handleChange(e, "category")}>
                        {categories.map((category) => (
                            <option key={category.name} value={category.name}>{category.name}</option>
                        ))}
                    </select>
                    <span className="title">Título:</span>
                    <input
                        className="input"
                        type="text"
                        id="title"
                        value={this.state.title || ''}
                        onChange={e => this.handleChange(e, "title")}
                        />
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
                        <Link className="btn" to="/">
                            Cancelar
                        </Link>
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