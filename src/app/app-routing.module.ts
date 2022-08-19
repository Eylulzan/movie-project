import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginGuard } from "./guards/login.guard";
import { FavoriteMoviesComponent } from "./pages/favorite-movies/favorite-movies.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { MovieDetailComponent } from "./pages/movie-detail/movie-detail.component";
import { MoviesComponent } from "./pages/movies/movies.component";
import { SignupComponent } from "./pages/signup/signup.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "movies", component: MoviesComponent },
  { path: "movie/:id", component: MovieDetailComponent },
  { path: "favorite-movies", component: FavoriteMoviesComponent, canActivate:[LoginGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
