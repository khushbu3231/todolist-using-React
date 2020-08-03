import React, { Component } from 'react';
import PropTypes from 'prop-types'
class TodoItem extends Component{

    getStyle=()=>{
        return{
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration:this.props.todo.completed?'line-through':'none'
        }
        // if(this.props.todo.completed){
        //     return{
        //         textDecoration:'line-through'
        //     }
        // }
        // else{
        //    return{
        //        textDecoration:'none'
        //    }
        // }
    }


    render(){
        //destructring
        const{id,title}=this.props.todo;

        return(
            <div style={this.getStyle()}>
               <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
               {this.props.todo.title}
               <button style={btnStyle} onClick={this.props.deleteTodo.bind(this,id)}> x</button>
            </div>
        )
    }

}

//css style
//----Inline style------
{/* <div style={{backgroundColor:'#f4f4f4'}}></div> */}

//variable with css
{/* <h1 style={itemStyle}>Hello</h1>

const itemStyle={
    backgroundColor:'#3498DB'
} */}

TodoItem.propTypes={
    todo:PropTypes.object.isRequired
}
const btnStyle={
    background:'#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}

export default TodoItem;
