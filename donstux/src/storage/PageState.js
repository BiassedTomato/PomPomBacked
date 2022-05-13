import { createStore, Reducer, Action } from "redux";

const initState = {
    main: true,
    allPets: false,
    about: false
};

const navBtnState = (state = initState, action) => {
    switch(action.type){
        case "MAIN_PAGE": return {...state, main: true, allPets: false, about: false}
        case "ALLPETS_PAGE": return {...state, main: false, allPets: true, about: false}
        case "ABOUT_PAGE": return {...state, main: false, allPets: false, about: true}

        default: return state;
    }
}

export const btnStateStorage = createStore(navBtnState, initState)