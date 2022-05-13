import { createPortal } from "react-dom"
import "./burgerMenu.css"
import Cross from "../Authorization/Vector.svg"
import { storage } from "../../storage/PomPomStorage"
import { useNavigate } from 'react-router-dom'
import { btnStateStorage } from "../../storage/PageState";

function close() {
    storage.dispatch({ type: "CLOSEMENU" })
}

function logIn(){
    storage.dispatch({type:"LOGIN"})
}

export function BurgerMenu(props) {

    const navigate = useNavigate()
    const btnStates = btnStateStorage.getState()

    const changeNavStyle = (btnType) => {
        btnStateStorage.dispatch({ type: btnType })
    }

    const portal = document.getElementById("portal")
    if (!props.visible || portal == null)
        return null;

    return (
        createPortal(

            <div id="shade" onClick={close}>
                <div id="pane">
                    <img id="cross" src={Cross} onClick={close} />
                    <div id="buttons-container">
                        <button onClick={() => { changeNavStyle("MAIN_PAGE"); navigate("/"); close() }}>Главная</button>
                        <button onClick={() => { changeNavStyle("ALLPETS_PAGE"); navigate("/all"); close() }}>Все питомцы</button>
                        <button onClick={() => { changeNavStyle("ABOUT_PAGE"); navigate("/about"); close() }} >О нас</button>
                        <button onClick={logIn}>Войти или зарегистрироваться</button>
                    </div>
                </div>
            </div>,

            portal)
    )
}