import { ChangeDetectionStrategy,Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { delay,take } from "rxjs";
import { Movie } from "../../models/movie.interface";
import { MovieService } from "../../services/movie.service";
import { ToastrService } from "ngx-toastr";
import * as AllFavoriteActions from "../../store/actions/favorite-movie-actions";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
})
export class MoviesComponent implements OnInit {
  topRatedMovies: Movie[] = [];
  searchResults: Movie[] = [];
  totalResults: number = 0;
  searchText: string = "";
  loading: boolean = true;
  currentPage: number = 1;
  favoriteMovies: Movie[] = [];
  movie: any;
  constructor(private toastr:ToastrService,private movieService: MovieService,private store: Store<any>) {}

  ngOnInit(): void {
    this.getTopRatedMovies(1);
    this.store
    .select("favoriteReducer")
    .pipe(take(1))
    .subscribe((state) => {
      this.favoriteMovies = state;
    });
  }

  getTopRatedMovies(page: number) {
    this.movieService
      .getTopRatedMovies(page)
      .pipe(delay(500))
      .subscribe((response: any) => {
        this.topRatedMovies = response.results;
        this.totalResults = response.total_results;
        this.loading = false;
      });
  }

  pageChanged(event: any) {
    this.currentPage = event;
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    this.getTopRatedMovies(this.currentPage);
  }

  searchMovies() {
    this.movieService.searchMovies(this.searchText).subscribe((data) => {
      this.topRatedMovies = [];
      this.searchResults = data.results;
      this.loading = false;
    });
  }
  addToFavorite(event: any) {
    this.store.dispatch(new AllFavoriteActions.AddToFavorite(event));
    this.toastr.success(this.movie.title  ,'favorilere eklendi');
  }

  removeFromFavorite(event: any) {
    this.store.dispatch(new AllFavoriteActions.RemoveFromFavorite(event));
  }
}
