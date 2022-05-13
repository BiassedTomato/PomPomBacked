import React from "react";
import "./CompanyInfo.css"
import banner from "./banner.svg"
import { PageBase } from "../PageBase";

function CompanyInfo() {

    return (
        <PageBase>
            <div className="CompanyInfo">
                <div className="mainBanner">
                    <img src={banner} alt="наш баннер"></img>
                </div>

                <div className="mainInfo">
                    <h1>НАШ МАГАЗИН</h1>
                    <p>Здесь информация о идее этого проекта, его создании и создателях. <br></br>Гав-гав</p>
                </div>
            </div>
        </PageBase>
    )
}

export default CompanyInfo