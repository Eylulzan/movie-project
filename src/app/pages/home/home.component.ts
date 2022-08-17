import { Component, OnInit } from "@angular/core";
import { delay, take } from "rxjs";
import { Movie } from "../../models/movie.interface";
import { MovieService } from "../../services/movie.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  currentPage: number = 1;
  loading: boolean = true;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getPopularMovies();
  }

  // RxJS Reaktif Programlama
  // Component Lifecycle (Component Yaşam Döngüsü)

  getPopularMovies() {
    this.movieService
      .getPopularMovies()
      .pipe(delay(500))
      .subscribe((response: any) => {
        this.popularMovies = response.results;
        this.loading = false;
      });
  }
}
