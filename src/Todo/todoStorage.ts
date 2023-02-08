import { TodoType } from "./todoReducer";

export const saveTodo = (todo:TodoType[]) => {
  localStorage.setItem('todo', JSON.stringify(todo))
}

export const loadTodo = () => {
  const todoJson = localStorage.getItem('todo')
  if(!todoJson) {
    return []
  }
  try {
    return JSON.parse(todoJson)
  } catch (e) {
    console.error(e)
    return []
  }
}

