import React, { Component } from 'react'

function About () {
    
        return (
            // if you don't div we can use react.fragment -- it doens't show in DOM
            <React.Fragment>
                <h1>About</h1>
                <p>This is TodoList app</p>
            </React.Fragment>
        )
    
}

export default About
