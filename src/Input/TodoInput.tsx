import React, { ChangeEvent, FormEvent } from 'react'
import { RiChatNewLine } from 'react-icons/ri'
import { useInputDispatch, useInputState, useTodoDispatch } from '../Todo/TodoProvider'
import styles from './TodoInput.module.css'


export default function TodoInput() {
  const todoDispatch = useTodoDispatch()
  const inputDispatch = useInputDispatch()
  const inputState = useInputState()

  const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    inputDispatch({type: 'change', payload: event.target.value})
  }

  const handleSubmit = (event:FormEvent) => {
    event.preventDefault(); // 페이지 재호출 방지
    todoDispatch({type:'add', payload: inputState.text})
    inputDispatch({type:'clear'})
  }

  return (
    <div>
      <section className={styles.container}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <input 
            className={styles.input} 
            placeholder={'Add things to do'} 
            value={inputState.text}
            onChange={handleInputChange}
          />
          <button type='submit' className= {styles.enter}><RiChatNewLine/></button>
        </form>
      </section>
    </div>
  )
}