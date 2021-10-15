import React from "react";
import './Alert.css'

export const Alert = ({text}) => {
    return (
        <div className="alert">{text}</div>
    )
}