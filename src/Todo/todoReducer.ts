import { saveTodo } from "./todoStorage"

export type TodoType = {
  id: number
  text: string
  isChecked: boolean
}

export type TodoStateType = {
  todo: TodoType[]
}

export type TodoActionType = {
  type: 'add'
  payload: string
} | {
  type: 'remove'
  payload: number
} | {
  type: 'checked'
  payload: number
} | {
  type: 'allChecked'
} | {
  type: 'allRemove'
}


export const todoReducer = (state: TodoStateType, action: TodoActionType) => {
  switch(action.type) {
    case 'add':
      if(!action.payload) return state;
      const newTodo = {todo : [...state.todo, {id:Date.now(), text: action.payload, isChecked: false}]}
      saveTodo(newTodo.todo)
      return newTodo
    case 'remove':
      saveTodo(state.todo.filter(item => item.id !== action.payload))
      return {todo: state.todo.filter(item => item.id !== action.payload)}
    case 'checked':
      saveTodo(state.todo.map((item) => (
        item.id ===action.payload ? {...item, isChecked:!item.isChecked} : item
      )))
      return {todo: state.todo.map((item) => (
        item.id ===action.payload ? {...item, isChecked:!item.isChecked} : item
      ))}
    case 'allChecked':
      const isAllChecked = state.todo.every(item => item.isChecked)
      saveTodo(state.todo.map(item => (
        {...item, isChecked: !isAllChecked}
      )))
      return {todo: state.todo.map(item => (
        {...item, isChecked: !isAllChecked}
      ))}
    case 'allRemove':
      if(window.confirm('Are you sure you want to delete it all?')) {
        saveTodo([])
        return {todo: []}
      } else return state;
    default: 
      return state;
  }
}