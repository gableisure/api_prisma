import { Router } from 'express';
import { CreateMovieController } from '../modules/movies/useCases/createMovie/CreateMovieController';
import { CreateMovieRentController } from '../modules/movies/useCases/createMovieRent/CreateMovieRentController';
import { GetMoviesByReleaseDateController } from '../modules/movies/useCases/getMoviesByReleaseDate/GetMoviesByReleaseDateController';

const movieRoutes = Router();

const createMovieController = new CreateMovieController();
const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController();
const createMovieRentController = new CreateMovieRentController();

movieRoutes.get("/release", getMoviesByReleaseDateController.handle);

movieRoutes.post("/", createMovieController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);

export { movieRoutes }