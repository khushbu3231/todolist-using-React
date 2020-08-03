import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import PropTypes from 'prop-types'

class Todos extends Component {

   
    render(){
        return(
          <div>
             
              {
                  this.props.todos.map((todo)=>{
                      return(
                          <div key={todo.id}>
                               <TodoItem todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}/>
                             
                        </div>
                      )
                  }
                  )
              }
          </div>

        )

    }
}
//validation for properties that components has
Todos.propTypes={
    todos:PropTypes.array.isRequired

}
export default Todos;