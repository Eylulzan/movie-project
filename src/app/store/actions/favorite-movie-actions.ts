import { Action } from "@ngrx/store";
import { Movie } from "../../models/movie.interface";

export enum FavoriteActionTypes {
  ADD_TO_FAVORITES = "ADD_TO_FAVORITES",
  REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES",
}

export class AddToFavorite implements Action {
  readonly type = FavoriteActionTypes.ADD_TO_FAVORITES;
  constructor(public payload: Movie) {}
}

export class RemoveFromFavorite implements Action {
  type: string = FavoriteActionTypes.REMOVE_FROM_FAVORITES;
  constructor(public payload: Movie) {}
}

export type FavoriteActions = AddToFavorite | RemoveFromFavorite;
