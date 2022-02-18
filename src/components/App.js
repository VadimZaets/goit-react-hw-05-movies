import Navigation from "./Navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MoviesPageDetail from "./pages/MoviesPageDetail/MoviesPageDetail";
export default function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId">
          <MoviesPageDetail />
        </Route>
      </Switch>
    </div>
  );
}
