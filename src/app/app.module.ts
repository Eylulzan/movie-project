import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { ActionReducerMap, StoreModule } from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage";
import { NgxPaginationModule } from "ngx-pagination";
import { CarouselModule } from "primeng/carousel";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderLinkComponent } from "./components/header-link/header-link.component";
import { HeaderComponent } from "./components/header/header.component";
import { MovieCardComponent } from "./components/movie-card/movie-card.component";
import { FavoriteMoviesComponent } from "./pages/favorite-movies/favorite-movies.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { MovieDetailComponent } from "./pages/movie-detail/movie-detail.component";
import { MoviesComponent } from "./pages/movies/movies.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { favoriteReducer } from "./store/reducers/favorite-movie-reducers";

const reducers: ActionReducerMap<any> = { favoriteReducer };
export function localStorageSyncReducer(rootReducer: any) {
  return localStorageSync({
    keys: ["favoriteReducer"],
    rehydrate: true,
  })(rootReducer);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    MovieDetailComponent,
    MovieCardComponent,
    HeaderLinkComponent,
    MoviesComponent,
    FavoriteMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    YouTubePlayerModule,
    CarouselModule,
    ProgressSpinnerModule,
    StoreModule.forRoot(reducers, {
      metaReducers: [localStorageSyncReducer],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
