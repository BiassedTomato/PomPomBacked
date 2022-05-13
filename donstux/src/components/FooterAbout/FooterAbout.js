import React from 'react';
import style from './FooterAbout.module.css';

export const FooterAbout = (props) => {

    return (
        <div className={style.about}>
            <div className={style.title}>
                <img src={props.image} className={style.icon}/>
                <p>{props.textTitle}</p>
            </div>
            <p>{props.text}</p>
        </div>
    )
}