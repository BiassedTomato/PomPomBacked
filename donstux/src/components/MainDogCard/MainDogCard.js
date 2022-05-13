import React from 'react';
import style from './MainDogCard.module.css';

export const MainDogCard = (props) => {
    const backgroundStyle = {
        backgroundImage: `url(${props.image})`
    }

    return (
        <div style={backgroundStyle} className={style.dogCard}>
            <div className={style.dogCardHover}>
                <p>{props.text}</p>
            </div>
        </div>
    )
}