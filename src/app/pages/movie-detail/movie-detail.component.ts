import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { take } from "rxjs";
import { Cast } from "../../models/cast.interface";
import { Movie } from "../../models/movie.interface";
import { MovieService } from "../../services/movie.service";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.scss"],
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  casts: any[] = [];
  video: any;
  loading: boolean = true;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getMovieById(params["id"]);
      this.getMovieVideo(params["id"]);
      this.getCast(params["id"]);

      // JavaScript DOM Manipülasyonu
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    });
  }

  getMovieById(id: number) {
    this.movieService
      .getMovieById(id)
      .pipe(take(1))
      .subscribe((response: any) => {
        this.movie = response;
      });
  }

  getMovieVideo(id: number) {
    this.movieService
      .getMovieVideos(id)
      .pipe(take(1))
      .subscribe((response: any) => {
        if (response.results.length) {
          this.video = response.results.filter(
            (video) => video.type === "Trailer"
          )[0];
          this.loading = false;
        }
      });
  }

  getCast(id: number) {
    this.movieService.getMovieCredits(id).subscribe((response: any) => {
      this.casts = response.cast;
    });
  }
}
