import React, {Component} from "react";
import NewTodoForm from "./NewTodoForm"



import Todo from "./Todo"
import './TodoList.css'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state= {todos:[]}
        this.creat = this.creat.bind(this)
        this.remove=this.remove.bind(this)
        this.upDate= this.upDate.bind(this)
        this.toggleCompletion=this.toggleCompletion.bind(this)
    }
    creat(newTodo){
        this.setState({
            todos:[...this.state.todos, newTodo]
        })
    }
    remove(id){
        this.setState({
         todos: this.state.todos.filter(t=>t.id!==id)   
        })

    }
upDate(id,upDatedTask){
    console.log("updateTask==>",upDatedTask)
    const upDateTodos= this.state.todos.map(todo =>{
        if(todo.id===id){
            return{...todo, task:upDatedTask}
        }
        return todo
    })
    this.setState({todos:upDateTodos})
}
toggleCompletion(id){
    const upDateTodos= this.state.todos.map(todo =>{
        if(todo.id===id){
            return{...todo, completed:!todo.completed}
        }
        return todo
    })
    this.setState({todos:upDateTodos})
}

    render() {
        const todos= this.state.todos.map(todo =>{
            return <Todo key={todo.id} id={todo.id} task = {todo.task} completed = {todo.completed}  removeTodo={this.remove} upDateTodo={this.upDate} toggleTodo={this.toggleCompletion}/>
        })
        return(
            <div className="TodoList">
<h1>Todo List! <span>A Simple React Todo List App</span></h1>
<ul>{todos}</ul>

<NewTodoForm creatTodo={this.creat}></NewTodoForm>

           </div>
        )
    }
}
export default TodoList;