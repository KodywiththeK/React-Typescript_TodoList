import React from 'react'
import { useTodoState } from '../Todo/TodoProvider'
import styles from './TodoHeader.module.css'


export default function TodoHeader() {
  const todoState = useTodoState()
  const count = todoState.todo.filter((item) => !item.isChecked).length
  return (
    <header>
      <h1 className={styles.headerTitle}>
        <mark className={styles.todoCount}>{count}</mark>
        &nbsp;&nbsp;Things to do
      </h1>
    </header>
  )
}
