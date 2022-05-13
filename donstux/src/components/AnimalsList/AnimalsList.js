import React, { useEffect, useState } from "react";
import PetCard from '../PetCard/PetCard.js';
import "./AnimalsList.css"
import { storage } from "../../storage/PomPomStorage.js";
import { useSelector } from "react-redux";

function AnimalsList(props) {

    const cards=[]



    for(let i=0;i<useSelector(t=>t.queryResultsCount);i++){
        cards.push(<PetCard key={i} id={i}/>)
    }

    return (
        <div className="AnimalsList">
            {cards}
        </div>
        //для подгрузки карточек при скроллинге будем вызывать по 1му анималлисту?  
    )
}


export default AnimalsList;
