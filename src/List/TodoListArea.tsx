import React, { ReactNode } from 'react'
import { useTodoState } from '../Todo/TodoProvider';

interface TodoListAreaProps {
  children: ReactNode
}

// HOC: high order component: 한번 이렇게 감싸서, 상위에서 결정해서 내려주는 방식
export default function TodoListArea(props: TodoListAreaProps) {

  const todoState = useTodoState()

  if(todoState.todo.length < 1) {
    return null;
  }
  return (
    <>
    {props.children}
    </>
  )
}
