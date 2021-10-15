import React from 'react'
import { TodayItem } from '../TodayItem/TodayItem'
import './Today.css'
import { useSelector } from 'react-redux'
 
export const Today = () => {

    const tasks = useSelector(state => state.tasks.tasks)

    return <section className="today">
        <h2 className="today__header">Today</h2>
        {tasks.length == 0 ? <span className="no-task-notifier">No tasks today</span> : <ul className="today__list">
            {tasks.map(task => {
                const {id, title} = task
                return (
                    <TodayItem key={id} id={id} title={title} />
                )
            })}
        </ul>}
    </section>
}