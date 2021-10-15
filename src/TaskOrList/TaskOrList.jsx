import React from 'react'
import './TaskOrList.css'
import {Link} from 'react-router-dom'
import Task from '../assets/Task.svg'
import Lists from '../assets/Lists.svg'

export const TaskOrList = () => {

    return(
        <section className="task-or-list">
        <ul className="task-or-list__list">
            <li className="task-or-list__item"><Link className="task-or-list__text" to="newtask"><img className="task-or-list__icon" src={Task}></img>Task</Link></li>
            <li className="task-or-list__item"><Link className="task-or-list__text" to="/"><img className="task-or-list__icon" src={Lists}></img>List</Link></li>
        </ul>
    </section>
    )
}