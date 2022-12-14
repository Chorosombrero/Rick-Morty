import { DELETE_FAVORITES, ADD_FAVORITES,FILTER,ORDER } from "./types"; 

export const addFavorites = (props) => {
    return {
        type: ADD_FAVORITES,
        payload: props
    }
}
export const deleteFavorites = (id) => {
    return {
        type: DELETE_FAVORITES,
        payload:id
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload:gender
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload:order
    }
}