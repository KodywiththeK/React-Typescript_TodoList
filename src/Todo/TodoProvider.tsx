import React, { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react'
import { TodoInputActionType, todoInputReducer, TodoInputStateType } from './todoInputReducer'
import { TodoActionType, todoReducer, TodoStateType } from './todoReducer'
import { loadTodo } from './todoStorage'

interface todoProviderProps {
  children: ReactNode
}

const TodoStateContext = createContext<TodoStateType | null>(null)
const TodoDispatchContext = createContext<Dispatch <TodoActionType> | null>(null)
const InputTodoContext = createContext<TodoInputStateType | null>(null)
const InputTodoDispatchContext = createContext<Dispatch <TodoInputActionType> | null >(null)


export default function TodoProvider(props:todoProviderProps) {
  const [inputState, inputDispatch] = useReducer(todoInputReducer, { text: ''})
  const [todoState, todoDispatch] = useReducer(todoReducer, { todo: loadTodo() })

  return (
    <TodoStateContext.Provider value={todoState}>
      <TodoDispatchContext.Provider value={todoDispatch}>
        <InputTodoContext.Provider value={inputState}>
          <InputTodoDispatchContext.Provider value={inputDispatch}>
            {props.children}
          </InputTodoDispatchContext.Provider>
        </InputTodoContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export const useTodoState = () => {
  const value = useContext(TodoStateContext)
  if(!value) {
    throw new Error('cannot find TodoState')
  }
  return value;
}
export const useTodoDispatch = () => {
  const value = useContext(TodoDispatchContext)
  if(!value) {
    throw new Error('cannot find TodoDispatchContext')
  }
  return value;
}
export const useInputState = () => {
  const value = useContext(InputTodoContext)
  if(!value) {
    throw new Error('cannot find InputTodoState')
  }
  return value;
}
export const useInputDispatch = () => {
  const value = useContext(InputTodoDispatchContext)
  if(!value) {
    throw new Error('cannot find InputTodoDispatchContext')
  }
  return value;
}
