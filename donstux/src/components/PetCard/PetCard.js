import React from "react";
import pet from "./pet.png";
import "./PetCard.css";
import { storage } from "../../storage/PomPomStorage";
import { useStore } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getBreed, getDogByID } from "../../API/dogapi";
import { getImage } from "../../API/dogapi";
import broken from "./broken.png"
import { getRandomDog } from "../../API/dogapi";
import { breedData } from "../../API/dogapi";
import { useNavigate } from "react-router-dom";

function PetCard(props) {


    const navigate = useNavigate()

    const [address, setAddress] = useState(broken)

    const [breed, setBreed] = useState("all")
    const [age, setAge] = useState("4 месяца")
    const [name, setName] = useState("")
    const [cost, setCost]=useState("")

    const currentSizeFilter = useSelector(filterState => filterState.size)
    const currentFurLengthFilter = useSelector(filterState => filterState.furLength)
    const currentBreedFilter = useSelector(filterState => filterState.breed)

    //console.log()

    useEffect(() => {
        getDogByID(props.id+1/*currentBreedFilter, currentSizeFilter, currentFurLengthFilter*/)
        .then(
            (data) => {

                setBreed(data.breed)
                setAddress(data.url)
                setAge("4 месяца")

            },
            (err) => {
                setBreed("")
                setAddress(broken)
                setAge("")
                setName("")
                setCost("")

            }, 
        )
    },
        [useSelector(f => f.breed), useSelector(f => f.size), useSelector(f => f.furLength)])

    return (
        <div className="petBlock">
            <img className="petPhoto" src={address} alt="пёсель" draggable={false} onClick={()=>{navigate("/view/" + props.id); window.scrollTo(0)}} />
            <div className="petInfo">
                <p className="breed subheading"  onClick={()=>{navigate("/view/" + props.id); window.scrollTo(0)}}>{name} </p>
                <p className="age avarage">{age}</p>
                <p className="price avarageBig">{cost}</p>
            </div>


        </div>
    )
}
export default PetCard;