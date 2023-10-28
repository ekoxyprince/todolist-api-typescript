import Todo from "../models/todo"

type requestBody = {id:string | null,name:string}
let todos:Array<Todo> = []
export const  fetchAllTodos = (req:any,res:any,next:any)=>{
 res.json({success:true,todos:todos})
}

export const addTodo = (req:any,res:any,next:any)=>{
    const id = Math.floor(Math.random()*900000+100000).toString()
    const {name} = req.body as requestBody
    const todo:Todo = {id:id,todo:name,created:new Date(Date.now())}
    todos.push(todo)
    res.json({success:true,todos:todos})
}

export const updateTodo = (req:any,res:any,next:any)=>{
    const {id,name} = req.body as requestBody
    const todoIndex = todos.findIndex(todo=>todo.id===id)
    const todo:Todo = {id:id!,todo:name,created:new Date()}
    todos[todoIndex].todo = todo.todo
    res.json({success:true,todos:todos})
}

export const deleteTodo = (req:any,res:any,next:any)=>{
    const {id} = req.body
    const filteredTodo = todos.filter(todo=>todo.id !== id)
    todos = [...filteredTodo]
    res.json({success:true,todos:todos})
}