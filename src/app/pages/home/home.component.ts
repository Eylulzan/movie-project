import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ToastrService } from "ngx-toastr";
import { delay, take } from "rxjs";
import { Movie } from "../../models/movie.interface";
import { MovieService } from "../../services/movie.service";
import * as AllFavoriteActions from "../../store/actions/favorite-movie-actions";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  currentPage: number = 1;
  loading: boolean = true;
  favoriteMovies: Movie[] = [];
  movie: any;
  constructor(private toastr:ToastrService,private movieService: MovieService, private store: Store<any>) {}

  ngOnInit(): void {
    this.getPopularMovies();
    this.store
      .select("favoriteReducer")
      .pipe(take(1))
      .subscribe((state) => {
        this.favoriteMovies = state;
      });
  }

  // RxJS Reaktif Programlama
  // Component Lifecycle (Component Yaşam Döngüsü)

  // Toastr

  getPopularMovies() {
    this.movieService
      .getPopularMovies()
      .pipe(delay(1))
      .subscribe((response: any) => {
        this.popularMovies = response.results;
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
