import React, { useState } from "react";
import './TodayItem.css'

export const TodayItem = ({id, title}) => {
    const [isChecked, setIsChecked] = useState(false)

    const handleChange = () => {
        setIsChecked(!isChecked)
    }

    const titleCutter = () => {
        if (title.length > 100) {
            title = title.slice(0, 100) + "..."
        }
        return title
    }
 
    return (
        <li className="today-item" key={id}>
            <label className="today-item__container">
                <input className="today-item__checkbox" type="checkbox" onChange={handleChange} />
                <span className="today-item__custom-checkbox"></span>
                <span className={ isChecked ? "today-item__text checked" : "today-item__text unchecked" }>{titleCutter()}</span>
            </label>
        </li>
    )
}