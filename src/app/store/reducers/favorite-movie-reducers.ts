import { FavoriteMovie } from "../../models/favorite.interface";
import { Movie } from "../../models/movie.interface";
import {
  FavoriteActions,
  FavoriteActionTypes,
} from "../actions/favorite-movie-actions";

export let initialState: Movie[] = [];

export function favoriteReducer(state = initialState, action: FavoriteActions) {
  switch (action.type) {
    case FavoriteActionTypes.ADD_TO_FAVORITES:
      let item = state.find((item) => item.id === action.payload.id);

      if (!item) {
        let favMovie: Movie = { ...action.payload };
        // Spread Operatörü
        return [...state, favMovie];
      } else {
        return [...state];
      }

    case FavoriteActionTypes.REMOVE_FROM_FAVORITES:
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
}
