import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundError = () => (
  <div className="center">    
    <h1>Erro 404! Post inexistente!</h1>
    <Link className="btn" to="/">
        Voltar para Home
    </Link>
  </div>
)

export default NotFoundError