import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {addTask} from '../store/taskerSlice'
import './NewTask.css'

export const NewTask = () => {
    const [text, setText] = useState('')
    const history = useHistory()

    const dispatch = useDispatch()

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const addNewTask = (e) => {
        if (text) {
            dispatch(addTask({ text }))
            backToHome()
        } else {
            backToHome()
        }
    }

    const backToHome = () => {
        history.push("/")
    }

    return (
    <section className="new-task">
        <div className="btn-container">
            <button type="button" className="btn back-btn" onClick={backToHome} >Cancel</button>
            <button type="button" className="btn back-btn" onClick={addNewTask} >Done</button>
        </div>
        <textarea onChange={handleChange} value={text} className="new-task-input" placeholder="Enter a task"></textarea>
    </section>)
}