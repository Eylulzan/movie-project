import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Movie } from "../../models/movie.interface";
import * as AllFavoriteActions from "../../store/actions/favorite-movie-actions";

@Component({
  selector: "app-favorite-movies",
  templateUrl: "./favorite-movies.component.html",
  styleUrls: ["./favorite-movies.component.scss"],
})
export class FavoriteMoviesComponent implements OnInit {
  favoriteMovies: Movie[] = [];
  currentPage: number = 1;
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.select("favoriteReducer").subscribe((state) => {
      this.favoriteMovies = state;
    });
  }

  removeFromFavorite(event: any) {
    this.store.dispatch(new AllFavoriteActions.RemoveFromFavorite(event));
    setTimeout(location.reload.bind(location), 1);
  }
}
