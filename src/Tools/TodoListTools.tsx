import React from 'react'
import styles from './TodoListTools.module.css'
import {IoCheckmarkDoneCircleOutline} from 'react-icons/io5'
import {MdDelete} from 'react-icons/md'
import { useTodoDispatch, useTodoState } from '../Todo/TodoProvider'


export default function TodoListTools() {

  const todoDispatch = useTodoDispatch()
  const todoState = useTodoState()

  const allCheck = () => {
    todoDispatch({type: 'allChecked'})
  }
  const allDelete = () => {
    todoDispatch({type: 'allRemove'})
  }
  const isAllChecked = () => {
    return todoState.todo.every(item => item.isChecked)
  }
  return (
    <section className={styles.container}>
      <button onClick={allCheck} className={isAllChecked() ? styles.allChecked : styles.button}>
        <IoCheckmarkDoneCircleOutline className={styles.checkAllIcon}/>{isAllChecked() ? '선택해제' : '전체선택'}
      </button>
      <button onClick={allDelete} className={[styles.button, styles.removeAllButton].join(' ')}>
        <MdDelete className={styles.removeAllIcon}/>전체삭제
      </button>
    </section>
  )
}
