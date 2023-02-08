import React from 'react'
import styles from './TodoItem.module.css'
import { BsCheckCircle } from 'react-icons/bs'
import { IoIosRemoveCircleOutline } from 'react-icons/io'
import { useTodoDispatch } from '../Todo/TodoProvider'


interface TodoItemProps {
  id: number
  text: string
  isChecked: boolean
}

export default function TodoItem(props: TodoItemProps) {

  const todoDispatch = useTodoDispatch()

  const handleToggleClick = () => {
    todoDispatch({type: 'checked', payload:props.id})
  }
  const handleRemoveClick = () => {
    todoDispatch({type: 'remove', payload:props.id})
  }

  return (
    <li className={styles.container}>
      <BsCheckCircle 
        className={[styles.checkIcon, `${props.isChecked ? styles.checkedCircleIcon : styles.uncheckedCircleIcon}`].join(' ')}
        onClick={handleToggleClick}
      />
      <span className={props.isChecked ? styles.lineThrough : ''}>{props.text}</span>
      <IoIosRemoveCircleOutline 
        className={styles.removeIcon} 
        onClick={handleRemoveClick}
      />
    </li>
  )
}
