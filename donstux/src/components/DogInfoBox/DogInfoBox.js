import React from 'react';
import style from './DogInfoBox.module.css';

export const DogInfoBox = (props) => {

    return(
        <div className={style.dogInfoBox}>
            <p className={style.title}>{props.title}</p>
            <p className={style.info}>{props.info}</p>
        </div>
    )
}