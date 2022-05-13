import { useState } from "react"
import { useSelector } from "react-redux"
import { Header, Footer } from "../components"
import AuthorizationLogIn from "../components/Authorization/AuthorizationLogIn"
import { BurgerMenu } from "../components/BurgerMenu/BurgerMenu"

export function PageBase(props) {

    

    const isLogging = useSelector(s => s.login)
    const isSigningUp = useSelector(s => s.signup)

    const openMenu=useSelector(s=>s.burgerMenu)

    return (
        <div className="App">
            <AuthorizationLogIn visible={isLogging} />
            <BurgerMenu visible={openMenu} />

            <Header />
            {props.children}
            <Footer />
        </div>
    )
}