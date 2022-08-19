import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { ToastrService } from "ngx-toastr";

import { take } from "rxjs";
import { Movie } from "../../models/movie.interface";

@Component({
  selector: "app-movie-card",
  templateUrl: "./movie-card.component.html",
  styleUrls: ["./movie-card.component.scss"],
})
export class MovieCardComponent implements OnInit {
  @Input()
  movie: Movie;
  @Input()
  isFavorite: boolean;
  @Output()
  addFavorite: EventEmitter<Movie> = new EventEmitter<Movie>();
  @Output()
  removeFavorite: EventEmitter<Movie> = new EventEmitter<Movie>();
  isUserAuth: boolean = false;
  favoriteMovies: Movie[] = [];
  constructor(private toastr:ToastrService, private store: Store<any>) {
    this.isUserAuth = localStorage.getItem("user") ? true : false;
    // Ternary If
  }

  ngOnInit(): void {
    this.store
      .select("favoriteReducer")
      .pipe(take(1))
      .subscribe((state) => {
        this.favoriteMovies = state;
      });
  }

  addMovieToFavorites() {
    this.addFavorite.emit(this.movie);
    this.toastr.success(this.movie.title  ,'favorilere eklendi');
  }

  removeMovieFromFavorites() {
    this.removeFavorite.emit(this.movie);
    this.toastr.warning(this.movie.title  ,'favorilerden çıkartıldı');
  }

  checkFavoriteExists(movie: Movie): boolean {
    let item = this.favoriteMovies.find((m) => m.id === movie.id);

    if (!item) {
      return true;
    } else {
      return false;
    }
  }
}
