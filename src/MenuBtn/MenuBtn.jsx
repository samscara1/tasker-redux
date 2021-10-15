import React, { useState } from 'react'
import addBtn from '../assets/add.svg'
import closeBtn from '../assets/close.svg'
import './MenuBtn.css'

export const MenuBtn = ({handleMenuBtn, menuBtnPressed}) => {

    const handleBtn = () => {
        handleMenuBtn()
    }

    return (
        // <div className="menu-btn__container">
            <button 
                onClick={handleBtn} 
                className="menu-btn" 
            >
                <img 
                    className="menu-btn__img" 
                    src={menuBtnPressed ? closeBtn : addBtn} 
                    alt="menu-button" 
                />
            </button>
        // </div>
    )
}