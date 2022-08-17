import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Credits } from "../models/credits.interface";
import { Movie } from "../models/movie.interface";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  apiUrl: string = "https://api.themoviedb.org/3/movie/";
  apiKey: string = "bdcb28035216b328bd4a7ff0b18e718e";
  language: string = "tr-TR";
  constructor(private httpClient: HttpClient) {}

  // Template Literal = ` `
  getPopularMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(
      `${this.apiUrl}popular?api_key=${this.apiKey}&language=${this.language}&page=1`
    );
  }

  getMovieById(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>(
      `${this.apiUrl}${id}?api_key=${this.apiKey}&language=${this.language}`
    );
  }

  getMovieCredits(id: number): Observable<Credits> {
    return this.httpClient.get<Credits>(
      `${this.apiUrl}${id}/credits?api_key=${this.apiKey}&language=${this.language}`
    );
  }

  getMovieVideos(id: number): Observable<any> {
    return this.httpClient.get(
      `${this.apiUrl}/${id}/videos?api_key=${this.apiKey}`
    );
  }

  getTopRatedMovies(page: number): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(
      `${this.apiUrl}top_rated?api_key=${this.apiKey}&page=${page}&language=en-US`
    );
  }

  searchMovies(searchValue: string): Observable<any> {
    return this.httpClient.get(`
    https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=${this.language}&query=${searchValue}&page=1`);
  }
}
