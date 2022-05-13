import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { storage } from "../../storage/PomPomStorage";
import "./AuthorizationLogIn.css"
import Cross from "./Vector.svg"

function close(e) {
    if (e.target.id === "authorize-shade") {
        storage.dispatch({ type: "NOAUTH" })
    }
}



function AuthorizationLogIn(props) {

    const signup = useSelector(t => t.signup)
    const login = useSelector(t => t.login)

    function switchType() {
        if (signup)
            storage.dispatch({ type: "LOGIN" })
        else if (login)
            storage.dispatch({ type: "SIGNUP" })
    }

    if ((signup || login) && document.getElementById("portal") != null)
        return createPortal(
            <div id="authorize-shade" onClick={close}>
                <div className="AuthorizationLogIn">
                    <h3>POMPOM</h3>
                    <img className="cross" src={Cross} onClick={()=>storage.dispatch({type:"NOAUTH"})} />
                    <p>{signup ? "Регистрация" : "Войти с помощью электронной почты"}</p>
                    <div className="formButtons">

                        {signup && <input type="name" name="password" required placeholder="Имя" />}
                        <input type="email" name="email" required placeholder="E-mail" />
                        <input type="password" name="password" required placeholder="Пароль" />
                        <input className="enterButton" type="submit" value={signup ? "Зарегистрироваться" : "Войти"} name="enterButton" />
                    </div>
                    <p className="signUpRef" onClick={switchType}>{signup ? "Войти" : "Зарегистрироваться"} </p>


                </div>
            </div>,
            document.getElementById("portal"))

    else return null;
}

export default AuthorizationLogIn