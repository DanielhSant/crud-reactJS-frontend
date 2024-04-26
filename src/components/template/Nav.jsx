import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => 
    <aside className="menu-area"> 
        <nav className="menu">
            <div className='Home'>
                <Link to="/">
                    <i className="fa fa-home"></i> Início
                </Link>
            </div>
            <div className='Users'>
                <Link to ="/users">
                    <i className="fa fa-users"></i> Usuários
                </Link>
            </div>
        </nav>
    </aside>