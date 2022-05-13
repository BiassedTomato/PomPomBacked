import React, { useState } from 'react';
import style from './Navigation_Button.module.css';

export const Navigation_Button = (props) => {

    const btnStyle =  props.isActive ? {backgroundColor: '#FFD300'} : {backgroundColor: 'none'}  
    

    return (
        <div className={style.navButton}  onClick={props.onClick} style={btnStyle}>
            <p>{props.text}</p>
        </div>
    )
}