import { Component, Input, OnInit } from "@angular/core";
import { Movie } from "../../models/movie.interface";

@Component({
  selector: "app-movie-card",
  templateUrl: "./movie-card.component.html",
  styleUrls: ["./movie-card.component.scss"],
})
export class MovieCardComponent implements OnInit {
  @Input()
  movie: Movie;
  isUserAuth: boolean = false;
  constructor() {
    this.isUserAuth = localStorage.getItem("user") ? true : false;
    // Ternary If
  }

  ngOnInit(): void {}
}
