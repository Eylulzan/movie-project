import { Component, OnInit } from "@angular/core";
import { delay } from "rxjs";
import { Movie } from "../../models/movie.interface";
import { MovieService } from "../../services/movie.service";

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
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getTopRatedMovies(1);
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
}
