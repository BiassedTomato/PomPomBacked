import { createStore, Reducer, Action } from "redux";
import { BreedTypes } from "../API/dogapi";
import { combineReducers } from "redux";

const initState = {
    breed: "all",
    furLength: 0,
    size: 0,
    age: 0,
    login: false,
    signup: false,
    queryResultsCount:9,
    selectPage:0,
    burgerMenu:false
}

const queryReducer = (state = initState, action) => {
    switch (action.type) {
        case "CHANGEBREED": return { ...state, breed: BreedTypes[action.payload] }
        case "CHANGELENGTH": return { ...state, furLength: action.payload }
        case "CHANGESIZE": return { ...state, size: action.payload }
        case "LOGIN": return { ...state, login: true, signup: false }
        case "SIGNUP": return { ...state, login: false, signup: true }
        case "NOAUTH": return { ...state, login: false, signup: false }
        case "CLOSEMENU": return { ...state, burgerMenu: false }
        case "OPENMENU": return { ...state, burgerMenu: true }
        case "OPENPAGE": return { ...state, selectPage:action.payload}
        //case "COUNTRESULTS": return { ...state, ...action.payload}
        default: return initState
    }




}

export const storage = createStore(queryReducer, initState)
