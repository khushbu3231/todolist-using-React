import React, { Component } from 'react'
import {Link} from 'react-router-dom';

function Header() {
    return(
        <header style={headerStyle}>
            <h1>ToDoList</h1>
            <Link style={linkStyle} to='/'>Home</Link> |<Link style={linkStyle}to="/about">About </Link>
            </header>
    )
}

const headerStyle={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:10 
}
const linkStyle={
    color:'#fff',
    textDeoration:'none'
}
export default Header
