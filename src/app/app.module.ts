import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MovieDetailComponent } from "./pages/movie-detail/movie-detail.component";
import { NgxPaginationModule } from "ngx-pagination";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { CarouselModule } from "primeng/carousel";
import { MovieCardComponent } from "./components/movie-card/movie-card.component";
import { HeaderLinkComponent } from "./components/header-link/header-link.component";
import { MoviesComponent } from "./pages/movies/movies.component";
import { ProgressSpinnerModule } from "primeng/progressspinner";

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
