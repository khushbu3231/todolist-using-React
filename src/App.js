import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import Todos from './Components/Todos/Todos';
import Header from './Components/layout/Header';
import AddTodo from './Components/AddTodo/AddTodo';
import About from './Components/Pages/About';
import uuid from 'uuid';


//import logo from './logo.svg';
import './App.css';

class App extends Component {

  state={
    todos:[]
    
  }
componentDidMount(){
  axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
  .then(response=>{
    this.setState({
      todos:response.data
    })
  })
}
  //Checkbox toggle - to add line through on completed
  markComplete=(id)=>{
  

  this.setState({
    todos:this.state.todos.map((todo)=>{
      if(todo.id===id){
        todo.completed=!todo.completed
      }
      return todo
    })
  })

   

  }

  //delete todo
  deleteTodo=(id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/$
    {id`).then(response=>{
      this.setState({
        todos:[...this.state.todos.filter(todo=>todo.id!==id)]
      })
    })
  

  }

  addTodo=(title)=>{
    // const newTodo={
    //   id:4,
    //   title:title,
    //   completed:false
    // }
    axios.post("https://jsonplaceholder.typicode.com/todos",{
      title:title,
      completed:false
    })
    .then(response=>{
      this.setState({
        todos:[...this.state.todos,response.data]
      })
    })
    
  }
  
  render() {
    return (
      <Router>
      <div className="App">
        <div className="container"> 
        <Header/>
        <Route path="/" exact render={props=>(
          <React.Fragment>
               <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
          </React.Fragment>
        )
        }/>
        
      <Route path="/about" component={About}/>
        
      
      </div>
      </  div>
      </Router>
    );
  }
}
export default App;
