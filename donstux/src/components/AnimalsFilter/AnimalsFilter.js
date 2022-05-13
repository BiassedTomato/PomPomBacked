import React from "react";
import "./AnimalsFilter.css"
import ChooseSign from "./ChooseSign.svg";
import { storage } from "../../storage/PomPomStorage";
import { useSelector } from "react-redux";

function AnimalsFilter(){


    return(
        <div className="AnimalsFilter">
            <button className="hiddenFilter">Показать фильтры  
                <img className="chooseSign" src={ChooseSign} />
            </button>


            <select className="sizeSelector" name="sizeSelector" onChange={(e) => { storage.dispatch({ type: "CHANGESIZE", payload: e.target.selectedIndex }) }}>
                <option name="allSizeDogs">Любой размер</option>
                <option name="smallDogs">Маленькая (до 10кг)</option>
                <option name="mediumDogs">Средняя (от 10кг до 25кг)</option>
                <option name="hugeDogs">Большая (от 25кг)</option>
            </select>

            <select className="hairLength" name="hairLength" onChange={(e) => { storage.dispatch({ type: "CHANGELENGTH", payload: e.target.selectedIndex }) }}>
                <option name="allHairLength">Любая длина</option>
                <option name="shortHair">Гладкошерстные</option>
                <option name="LongHair">Длиношерстные</option>
            </select>

            <select className="breedSelector" name="breedSelector" onChange={(e) => { storage.dispatch({ type: "CHANGEBREED", payload: e.target.selectedIndex }) }}>
                <option name="allBreeds">Любая порода</option>
                <option name="sheepdog">Овчарка</option>
                <option name="spitz">Шпиц</option>
                <option name="shibaInu">Сиба-Ину</option>
                <option name="akitaInu">Акита-Ину</option>
            </select>

            <select name="ageSelector" className="ageSelector">
                <option name="allAges">Любой возраст</option>
                <option name="age2To3Months">От 2-х до 3-х месяцев</option>
                <option name="age4To6Months">От 4-х до 6-и месяцев</option>
                <option name="age6OrMoreMonths">От 6-и месяцев</option>
            </select>

            <select name="priceSelector" className="priceSelector">
                <option name="less20t">Любая цена</option>
                <option name="less20t">До 20 т.р.</option>
                <option name="less20t">От 20 до 40 т.р.</option>
                <option name="less20t">От 60 т.р.</option>
            </select>
        </div>

    )
}
export default AnimalsFilter