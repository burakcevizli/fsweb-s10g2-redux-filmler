import { TOGGLE_FAVORITES } from "../actions/favoritesActions";
import { ADD_FAVORITE } from "../actions/favoritesActions";
import { REMOVE_FAVORITE } from "../actions/favoritesActions";

const initialState = {
    favorites: [],
    displayFavorites: false,
}

export const favReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !(state.displayFavorites)
            }
        case ADD_FAVORITE:
            if (state.favorites.includes(action.payload)) {
                return state;
            } else
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload],
                };

        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter((item) => action.payload !== item.id)
            }
        default:
            return state;
    }
}
